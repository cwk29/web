import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-capabilities",
  templateUrl: "./capabilities.component.html",
  styleUrls: ["./capabilities.component.scss"],
})
export class CapabilitiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    window.location.href =
      "https://www.wortechcorp.com/pdf/WorTech_Capabilities.pdf";
  }
}
