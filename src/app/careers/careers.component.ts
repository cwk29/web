import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { Career } from "src/app/models/Career";
import { Location } from "src/app/models/Location";
import { CareersService } from "src/app/services/careers.service";
import { CLEARANCE } from "src/app/services/data/clearance";
import { startWith, map, switchMap, filter } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

interface Clearance {
  level: string;
}

interface Category {
  value: string;
}

export const CLEARANCES = [
  { level: CLEARANCE.N },
  { level: CLEARANCE.C },
  { level: CLEARANCE.PT },
  { level: CLEARANCE.S },
  { level: CLEARANCE.TS },
  { level: CLEARANCE.TS_SCI },
];

export const CATEGORIES = [
  { value: "Cloud" },
  { value: "Hardware Engineering" },
  { value: "ISSE" },
  { value: "Network Engineering" },
  { value: "Software Engineering" },
  { value: "Software Systems Engineering" },
  { value: "Systems Administrator" },
  { value: "Systems Engineering" },
];

export const LOCATIONS = [
  { city: "Columbia", state: "MD" },
  { city: "Charlotte", state: "NC" },
  { city: "Remote", state: "US" },
];

@Component({
  selector: "app-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.scss"],
})
export class CareersComponent implements OnInit {
  careers$!: Observable<Career[]>;
  selectedId: string = "";
  totalCareers: number = 3;

  // careers: Career[];
  public clearances: Clearance[];
  public categories: Category[];
  public locations: Location[];
  public resultCount: number;
  public searchTopic: string;
  searchControl: FormControl<string | null>;
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  filteredCareers: Observable<Career[]>;
  // filteredChips: Observable<string[]>;

  clearanceChips: string[];
  categoryChips: string[];
  locationChips: string[];
  filterChips: string[];

  clearanceControl: FormControl;
  categoryControl: FormControl;
  locationControl: FormControl;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private careersService: CareersService, private route: ActivatedRoute) {
    // this.careers = [];
    this.clearances = [];
    this.categories = [];
    this.locations = [];
    this.searchControl = new FormControl("");
    this.options = [];
    this.searchTopic = "";
    this.filteredOptions = new Observable<string[]>();
    this.filteredCareers = new Observable<Career[]>();
    // this.filteredChips = new Observable<string[]>();
    this.resultCount = 0;
    this.clearanceChips = [];
    this.categoryChips = [];
    this.locationChips = [];
    this.filterChips = [];

    this.clearanceControl = new FormControl("");
    this.categoryControl = new FormControl("");
    this.locationControl = new FormControl("");
    this.form = this.formBuilder.group({
      clearance: this.clearanceControl,
      category: this.categoryControl,
      location: this.locationControl,
    });
  }

  ngOnInit(): void {
    this.careers$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = String(params.get("id"));
        return this.careersService.getCareers();
      })
    );
    this.clearances = CLEARANCES.map((clearance) => {
      return clearance;
    });
    this.categories = CATEGORIES.map((category) => {
      return category;
    });
    this.locations = LOCATIONS.map((location) => {
      return location;
    });
    this.options = this.categories.map((category) => {
      return category.value;
    });

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(""),
      map((value: string | null) => this._filter(value || ""))
    );
    this.filteredCareers = this.careers$;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }

  private _filterCareers(values: string[]): void {
    this.filteredCareers = this.careers$.pipe(
      map((careers) => {
        // return all careers that match the filtered values
        return careers.filter((career) => {
          // return true if values is found in any of the career's properties
          return values.some((value) => {
            return (
              career.title.toLowerCase().includes(value.toLowerCase()) ||
              career.description.toLowerCase().includes(value.toLowerCase()) ||
              career.location.toLowerCase().includes(value.toLowerCase()) ||
              career.category.toLowerCase().includes(value.toLowerCase()) ||
              career.clearanceLevel.toLowerCase().includes(value.toLowerCase())
            );
          });
        });
      })
    );
    this.filteredCareers.subscribe((careers) => {
      this.resultCount = careers.length;
    });
  }

  removeFilter(filter: string): void {
    // remove filter from filters array
    const index = this.filterChips.indexOf(filter);

    if (index >= 0) {
      // this.clearanceChips.splice(index, 1);
      this.filterChips.splice(index, 1);
      this._filterCareers(this.filterChips);
    }

    if (this.filterChips.length === 0) {
      this.filteredCareers = this.careers$;
      this.searchTopic = "";
    }
  }

  searchCareers() {
    this.searchTopic = this.searchControl.value!.toLowerCase();
    if (this.searchTopic) {
      this._filterCareers([this.searchTopic]);

      // scroll to id of search results
      const el = document.getElementById("searchResults");
      if (el) {
        el.scrollIntoView();
      }
    }
  }

  onClearanceChange(event: any) {
    const index = this.clearanceChips.indexOf(event.value);

    if (index === -1) {
      this.filterChips.push(event.value);
      this._filterCareers(this.filterChips);
    }
  }

  onCategoryChange(event: any) {
    const index = this.categoryChips.indexOf(event.value);

    if (index === -1) {
      this.filterChips.push(event.value);
      this._filterCareers(this.filterChips);
    }
  }

  onLocationChange(event: any) {
    const index = this.locationChips.indexOf(event.value);

    if (index === -1) {
      this.filterChips.push(event.value);
      this._filterCareers(this.filterChips);
    }
  }

  // removeClearance(clearance: string): void {
  //   const index = this.clearanceChips.indexOf(clearance);

  //   if (index >= 0) {
  //     this.clearanceChips.splice(index, 1);
  //   }
  // }

  // removeCategory(category: string): void {
  //   const index = this.categoryChips.indexOf(category);

  //   if (index >= 0) {
  //     this.categoryChips.splice(index, 1);
  //   }
  // }

  // removeLocation(location: string): void {
  //   const index = this.locationChips.indexOf(location);

  //   if (index >= 0) {
  //     this.locationChips.splice(index, 1);
  //   }
  // }
}
