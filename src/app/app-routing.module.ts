import { NgModule, reflectComponentType } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { CompanyComponent } from "./company/company.component";
import { CapabilitiesComponent } from "./capabilities/capabilities.component";
import { SoftwareEngineeringComponent } from "./capabilities/software-engineering/software-engineering.component";
import { ShopComponent } from "./shop/shop.component";
import { ShopDetailComponent } from "./shop/shop-detail/shop-detail.component";
import { TermsComponent } from "./legal/terms/terms.component";
import { PrivacyComponent } from "./legal/privacy/privacy.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "company",
    component: CompanyComponent,
  },
  {
    path: "capabilities",
    children: [
      {
        path: "",
        component: CapabilitiesComponent,
      },
      {
        path: "software-engineering",
        component: SoftwareEngineeringComponent,
      },
    ],
  },
  {
    path: "shop",
    children: [
      {
        path: "",
        component: ShopComponent,
      },
      {
        path: ":id",
        component: ShopDetailComponent,
      },
    ],
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
