import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { BLOGPOSTS } from "./data/blogs";
import { Blog } from "../models/Blog";
@Injectable({
  providedIn: "root",
})
export class BlogService {
  private blogs: Observable<Blog[]>;
  constructor() {
    this.blogs = of(BLOGPOSTS);
  }

  getBlogPosts(): Observable<Blog[]> {
    return this.blogs;
  }

  getBlog(id: string): Observable<Blog> {
    return this.getBlogPosts().pipe(
      map((blogs: Blog[]) => blogs.find((blog) => blog.id === id)!)
    );
  }
}
