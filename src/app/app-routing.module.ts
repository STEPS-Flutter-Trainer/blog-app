import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component'; // Import the BlogPostComponent

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'new', component: NewPostComponent },
  { path: 'post/:id', component: BlogPostComponent }, // Route for individual post
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
