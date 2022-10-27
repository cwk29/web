import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Career } from "src/app/models/Career";
import { CareersService } from "src/app/services/careers.service";

@Component({
  selector: "app-career-detail",
  templateUrl: "./career-detail.component.html",
  styleUrls: ["./career-detail.component.scss"],
})
export class CareerDetailComponent implements OnInit {
  career$!: Observable<Career>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private careerService: CareersService
  ) {}

  ngOnInit() {
    this.career$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.careerService.getCareer(params.get("id")!)
      )
    );
  }

  goToCareer(career: Career) {
    const careerId = career ? career.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(["/careers", { id: careerId, foo: "foo" }]);
  }
}
