import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<Post>;
  constructor() { }

  ngOnInit() {
    this.posts = Post.list();    
  }
}
