import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
