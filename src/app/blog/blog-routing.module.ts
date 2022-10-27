import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";

import { BlogComponent } from "./blog.component";

const blogRoutes: Routes = [
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "blog/:id",
    component: BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
