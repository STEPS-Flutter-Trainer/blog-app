import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService, Post } from '../blog.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  title: string = '';
  content: string = '';

  constructor(private blogService: BlogService, private router: Router) {}

  addPost(): void {
    const newPost: Post = {
      id: Math.random(), // Simple id generation
      title: this.title,
      content: this.content,
    };
    this.blogService.addPost(newPost);
    this.router.navigate(['/']);
  }
}
