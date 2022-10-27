import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ContactService } from "src/app/services/contact.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  greeting$: Observable<string>;
  private fragment: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.greeting$ = new Observable<string>();
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
    this.contactService.getGreeting().subscribe(({ data, loading }) => {
      console.log(data);
      this.greeting$ = data.hello;
      this.loading = loading;
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector("#" + this.fragment)!.scrollIntoView();
    } catch (e) {}
  }
}
