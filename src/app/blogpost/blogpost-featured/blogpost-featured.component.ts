
import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs: Blogpost;
  error: {};

  constructor(private blogpostService: BlogpostService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.blogpostService.getFeaturedBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }
}
