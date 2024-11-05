import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post): void {
    this.posts.push(post);
  }
}
