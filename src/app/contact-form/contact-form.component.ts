import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { ReCaptchaV3Service } from "ng-recaptcha";

type Contact = {
  name: string;
  email: string;
};

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  validationMessage: string;
  topics: Array<string> = [
    "General Inquiry",
    "Alliance Partners",
    "Careers",
    "Customer Support",
    "Finance and Invoice",
    "Media Relations",
    "Sales & BD",
    "Small Business Inquiry",
    "Website Feedback",
  ];
  siteKey: string = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private http: HttpClient
  ) {
    this.validationMessage = "";
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      organization: new FormControl(""),
      topic: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required),
      recaptcha: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {}

  update(e: any) {
    console.log(e);
    this.contactForm.setValue({ topic: e.target.value });
  }

  // onSubmit(token: any) {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.contactForm.valid);
  //   if (this.contactForm.valid) {
  //     // Send the email
  //     document.getElementById('contactForm').submit
  //   }
  // }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onSubmit(): void {
    this.recaptchaV3Service
      .execute("importantAction")
      .subscribe((token) => this.handleToken(token));
  }

  private handleToken(token: string | null): void {
    console.log(token);
    // this.http.post<any>('http://localhost:8080/angular.php')
  }
}
