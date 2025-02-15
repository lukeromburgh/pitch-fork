import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    title: 'Pitchfork | Home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'posts', title: 'Pitchfork | Posts', component: PostPageComponent },
  {
    path: 'create-post',
    title: 'Pitchfork | Create Post',
    component: CreatePostComponent,
  },
  {
    path: 'profile',
    title: 'Pitchfork | Your Profile',
    component: ProfileComponent,
  },
];
