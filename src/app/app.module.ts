import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module,
  RecaptchaModule,
  RecaptchaFormsModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
} from "ng-recaptcha";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

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
import { ButtonModule } from "./components/button/button.module";
import { CardModule } from "./components/card/card.module";
import { SocialIconsModule } from "./components/social-icons/social-icons.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SoftwareEngineeringComponent } from "./capabilities/software-engineering/software-engineering.component";

// App Modules
import { CareersModule } from "./careers/careers.module";
import { BlogModule } from "./blog/blog.module";

// Services
import { ContactService } from "./services/contact.service";
import { GraphQLModule } from "./graphql.module";
import { CompanyComponent } from "./company/company.component";
import { CapabilitiesComponent } from "./capabilities/capabilities.component";
import { ShopComponent } from "./shop/shop.component";
import { ShopDetailComponent } from "./shop/shop-detail/shop-detail.component";
import { environment } from "src/environments/environment";
import { TermsComponent } from "./legal/terms/terms.component";
import { PrivacyComponent } from "./legal/privacy/privacy.component";
import { ShopFormComponent } from "./shop/shop-form/shop-form.component";
import { SocialIconsComponent } from "./components/social-icons/social-icons.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactFormComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MessagesComponent,
    CompanyComponent,
    CapabilitiesComponent,
    SoftwareEngineeringComponent,
    ShopComponent,
    ShopDetailComponent,
    TermsComponent,
    PrivacyComponent,
    ShopFormComponent,
  ],
  imports: [
    ButtonModule,
    CardModule,
    SocialIconsModule,
    BrowserModule,
    ApolloModule,
    CareersModule,
    BlogModule,
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
    GraphQLModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: environment.graphql.uri,
          }),
        };
      },
      deps: [HttpLink],
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
    // {
    //   provide: RECAPTCHA_SETTINGS,
    //   useValue: {
    //     siteKey: environment.recaptcha.siteKey,
    //   } as RecaptchaSettings,
    // },
    ContactService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
