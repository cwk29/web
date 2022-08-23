import { Component, HostListener, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  title: string;
  darkMode: boolean;
  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let element = document.querySelector(".toolbar") as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add("toolbar-bg");
    } else {
      element.classList.remove("toolbar-bg");
    }
  }

  constructor(private router: Router) {
    this.darkMode = localStorage.darkMode;
    this.title = "WorTech Corp";
  }

  ngOnInit(): void {
    if (
      localStorage.darkMode === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'dark';
    //   this.className = darkMode ? darkClassName : '';
    //   if (darkMode) {
    //     document.documentElement.classList.add('dark');
    //     // this.overlay.getContainerElement().classList.add(darkClassName);
    //   } else {
    //     document.documentElement.classList.remove('dark');
    //     // this.overlay.getContainerElement().classList.remove(darkClassName);
    //   }
    // });
  }

  isHomeRoute(): boolean {
    return this.router.url === "/";
  }

  goToContactForm() {
    console.log("clicked contact us");
  }

  toggleTheme(event: MatSlideToggleChange) {
    this.darkMode = event.checked;
    localStorage.darkMode = event.checked;
    localStorage.darkMode === "true"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    // this.toggleChange.emit(event.checked);
  }
}
