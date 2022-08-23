import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { Career } from "src/app/models/Career";
import { Location } from "src/app/models/Location";
import { CareersService } from "src/app/services/careers.service";
import { CLEARANCE } from "src/app/services/data/clearance";
import { startWith, map, switchMap } from "rxjs/operators";
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
  { value: "Software Development" },
  { value: "Cloud" },
  { value: "Network Engineering" },
  { value: "Software Systems Engineering" },
  { value: "Hardware Engineering" },
  { value: "Systems Administrator" },
  { value: "ISSE" },
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

  clearanceChips: string[];
  categoryChips: string[];
  locationChips: string[];

  clearanceControl: FormControl;
  categoryControl: FormControl;
  locationControl: FormControl;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private careersService: CareersService,
    private route: ActivatedRoute
  ) {
    // this.careers = [];
    this.clearances = [];
    this.categories = [];
    this.locations = [];
    this.searchControl = new FormControl("");
    this.options = [];
    this.searchTopic = "";
    this.filteredOptions = new Observable<string[]>();
    this.resultCount = 0;
    this.clearanceChips = [];
    this.categoryChips = [];
    this.locationChips = [];

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
    // this.careersService.getCareers().subscribe((careers: Career[]) => {
    //   this.careers = careers;
    // });
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
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onClearanceChange(event: any) {
    const index = this.clearanceChips.indexOf(event.value);

    if (index === -1) {
      this.clearanceChips.push(event.value);
    }
    // this.form.patchValue({ productId: null });
  }

  onCategoryChange(event: any) {
    const index = this.categoryChips.indexOf(event.value);

    if (index === -1) {
      this.categoryChips.push(event.value);
    }
    // this.form.patchValue({ productId: null });
  }

  removeClearance(clearance: string): void {
    const index = this.clearanceChips.indexOf(clearance);

    if (index >= 0) {
      this.clearanceChips.splice(index, 1);
    }
  }

  removeCategory(category: string): void {
    const index = this.categoryChips.indexOf(category);

    if (index >= 0) {
      this.categoryChips.splice(index, 1);
    }
  }

  // removeLocation(location: string): void {
  //   const index = this.locationFilters.indexOf(location);

  //   if (index >= 0) {
  //     this.locationFilters.splice(index, 1);
  //   }
  // }
}
