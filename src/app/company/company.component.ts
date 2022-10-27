import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("Clicked");
  }

  scrollToDetails(sectionId: string) {
    document.querySelector(sectionId)!.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  }
}
