import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { OnExecuteData, OnExecuteErrorData, ReCaptchaV3Service } from "ng-recaptcha";
import { Subscription } from "rxjs";
import { ContactService } from "../services/contact.service";

type Contact = {
  name: string;
  email: string;
};

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit, OnDestroy {
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
  serverMessage: any;
  loading = false;
  error: any;

  public recentToken = "";
  public recentError?: { error: any };
  public readonly executionLog: Array<OnExecuteData | OnExecuteErrorData> = [];

  private subscription: Subscription | undefined;

  public log: string[] = [];

  constructor(private recaptchaV3Service: ReCaptchaV3Service, private contactService: ContactService) {
    this.validationMessage = "";
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      organization: new FormControl(""),
      topic: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required),
      // recaptcha: new FormControl("", Validators.required),
    });
  }

  public ngOnInit(): void {
    this.subscription = this.recaptchaV3Service.onExecute.subscribe((data: OnExecuteData) => {
      this.handleRecaptchaExecute(data.action, data.token);
    });

    // this.serverMessage = this.contactService.getGreeting();
  }

  handleRecaptchaExecute(action: string, token: string) {
    console.log("handleRecaptchaExecute", action, token);

    this.loading = true;
    this.contactService.postContactForm(this.contactForm.value, token).subscribe(
      (result) => {
        console.log("result", result);
        this.serverMessage = result;

        // clear the form
        this.contactForm.reset();
      },
      (error) => {
        console.log("error", error);
        this.error = error;
      },
      () => {
        this.loading = false;
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public executeRecaptchaV3(action: any) {
    this.log.push(`Recaptcha v3 execution requested...`);
    this.recaptchaV3Service.execute(action);
  }

  public addTokenLog(message: string, token: string | null) {
    this.log.push(`${message}: ${this.formatToken(token)}`);
  }

  public formatToken(token: string | null) {
    return token !== null ? `${token.substr(0, 7)}...${token.substr(-7)}` : "null";
  }

  changeTopic(e: any) {
    this.contactForm.setValue({
      topic: e.target.value,
    });
  }
}
