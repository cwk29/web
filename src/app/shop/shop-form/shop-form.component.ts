import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OnExecuteData, ReCaptchaV3Service } from "ng-recaptcha";
import { Subscription } from "rxjs";
import { ContactService } from "src/app/services/contact.service";

@Component({
  selector: "app-shop-form",
  templateUrl: "./shop-form.component.html",
  styleUrls: ["./shop-form.component.scss"],
})
export class ShopFormComponent implements OnInit {
  shopForm: FormGroup;

  serverMessage: any;
  loading = false;
  error: any;

  private subscription: Subscription | undefined;

  public log: string[] = [];

  constructor(private recaptchaV3Service: ReCaptchaV3Service, private contactService: ContactService) {
    this.shopForm = new FormGroup({
      name: new FormControl("", Validators.required),
      company: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      telephone: new FormControl(""),
      specifications: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.subscription = this.recaptchaV3Service.onExecute.subscribe((data: OnExecuteData) => {
      this.handleRecaptchaExecute(data.action, data.token);
    });
  }

  handleRecaptchaExecute(action: string, token: string) {
    console.log("handleRecaptchaExecute", action, token);

    this.loading = true;
    this.contactService.postShopForm(this.shopForm.value, token).subscribe(
      (result) => {
        console.log("result", result);
        this.serverMessage = result;

        // clear the form
        this.shopForm.reset();
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
}
