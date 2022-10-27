import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ButtonModule } from "../components/button/button.module";

// Material UI
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatChipsModule } from "@angular/material/chips";

import { CareersComponent } from "./careers.component";
import { CareerDetailComponent } from "./career-detail/career-detail.component";

import { CareersRoutingModule } from "./careers-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CareersRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatInputModule,
    MatPaginatorModule,
    MatChipsModule,
  ],
  declarations: [CareersComponent, CareerDetailComponent],
})
export class CareersModule {}
