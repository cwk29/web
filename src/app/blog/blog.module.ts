import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CardModule } from "../components/card/card.module";
import { SocialIconsModule } from "../components/social-icons/social-icons.module";

import { BlogComponent } from "./blog.component";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";

@NgModule({
  imports: [CommonModule, BlogRoutingModule, MatButtonModule, MatIconModule, CardModule, SocialIconsModule],
  declarations: [BlogComponent, BlogDetailComponent],
})
export class BlogModule {}
