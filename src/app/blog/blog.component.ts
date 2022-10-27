import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Blog } from "../models/Blog";
import { BlogService } from "../services/blog.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogs$!: Observable<Blog[]>;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blogs$ = this.route.paramMap.pipe(
      switchMap((params) => {
        // this.selectedId = String(params.get("id"));
        return this.blogService.getBlogPosts();
      })
    );
  }

  private getBlogPosts() {
    this.blogService.getBlogPosts().subscribe((blogs) => {
      console.log(blogs);
    });
  }

  getBlogImage(): string {
    // return 'bg-[url("' + path + '")]';
    return 'bg-[url("/assets/images/blog/blog-post-1.png")]';
  }
}
