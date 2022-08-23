import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "WorTech Corp";
  private isDark = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domsanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "wortech",
      this.domsanitizer.bypassSecurityTrustResourceUrl(
        "../assets/Wortech-Logo-S-Standard.svg"
      )
    );
  }

  ngAfterViewInit() {
    // this.changeTheme(localStorage.darkMode);
    // // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // if (
    //   localStorage.darkMode ||
    //   (!("darkMode" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
  }

  changeTheme(darkMode: boolean) {
    // this.isDark = darkMode;
    // this.isDark
    //   ? document.body.classList.add("dark")
    //   : document.body.classList.remove("dark");
  }

  // removeTheme() {
  //   // Whenever the user explicitly chooses to respect the OS preference
  //   localStorage.removeItem('theme');
  // }
}
