import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CareersComponent } from "./careers.component";
import { CareerDetailComponent } from "./career-detail/career-detail.component";

const careersRoutes: Routes = [
  {
    path: "careers",
    component: CareersComponent,
  },
  {
    path: "career/:id",
    component: CareerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(careersRoutes)],
  exports: [RouterModule],
})
export class CareersRoutingModule {}
