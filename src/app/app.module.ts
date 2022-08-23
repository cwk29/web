import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module,
  RecaptchaModule,
  RecaptchaFormsModule,
} from "ng-recaptcha";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Material UI
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";

import { ContactFormComponent } from "./contact-form/contact-form.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { MessagesComponent } from "./messages/messages.component";
import { ButtonModule } from "./button/button.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// App Modules
import { CareersModule } from "./careers/careers.module";

// Services
import { ContactService } from "./contact.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactFormComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MessagesComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    CareersModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaV3Module,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    },
    ContactService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
