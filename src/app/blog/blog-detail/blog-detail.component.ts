import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Blog } from "src/app/models/Blog";
import { BlogService } from "src/app/services/blog.service";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"],
})
export class BlogDetailComponent implements OnInit {
  blog$!: Observable<Blog>;
  blog: Blog | undefined;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.blog$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.blogService.getBlog(params.get("id")!)));
    this.blog$.subscribe((blog: Blog) => {
      this.blog = blog;
    });
  }

  shareToSocial(platform: string) {
    if (navigator.share) {
      navigator
        .share({
          title: this.blog?.title,
          text: this.blog?.title,
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  }
}
