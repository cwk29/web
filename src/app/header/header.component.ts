import { Component, HostListener, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
import { MatOptionSelectionChange } from "@angular/material/core";
import { Router } from "@angular/router";
import { setUncaughtExceptionCaptureCallback } from "process";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  title: string;
  public isCollapsed = false;
  public page = "home";

  // theme: string | null;
  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let element = document.querySelector("#nav") as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add("nav-bg");
    } else {
      element.classList.remove("nav-bg");
    }
  }

  constructor(private router: Router) {
    this.title = "WorTech";
  }

  ngAfterViewInit(): void {
    // Initial theme check
    this.themeCheck();
  }

  // @todo: this is loading WAY too many times
  isHomeRoute(): boolean {
    // console.log(this.router.url === "/");
    if (this.router.url === "/" || this.router.url === "/#contact-us") {
      return true;
    }
    return false;
  }

  goToContactForm() {
    console.log("clicked contact us");
  }

  themeCheck() {
    // Icons
    const sunIcon = document.getElementById("sun")!;
    const moonIcon = document.getElementById("moon")!;

    // Theme variables
    const userTheme = localStorage.getItem("color-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // if set via local storage previously or if system theme is dark and user theme is not set
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      moonIcon.classList.add("display-none");
      return;
    }
    sunIcon.classList.add("display-none");
  }

  toggleIcon() {
    // Icons
    const sunIcon = document.getElementById("sun")!;
    const moonIcon = document.getElementById("moon")!;

    // toggle icons inside button
    sunIcon.classList.toggle("display-none");
    moonIcon.classList.toggle("display-none");
  }

  // Switch the themes on click
  toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      this.toggleIcon();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    this.toggleIcon();
  }
}
