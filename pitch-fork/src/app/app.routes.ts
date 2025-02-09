import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', title: 'Home', pathMatch: 'full', component: HomeComponent },
  { path: 'posts', title: 'Posts', component: PostPageComponent },
  { path: 'create-post', title: 'Create Post', component: CreatePostComponent },
];
