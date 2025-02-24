import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { FullScreenPostComponent } from './components/full-screen-post/full-screen-post.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    title: 'Pitchfork | Home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'about', title: 'Pitchfork | About', component: AboutComponent },
  { path: 'posts', title: 'Pitchfork | Posts', component: PostPageComponent },
  {
    path: 'post/:id',
    title: 'Pitchfork | Post',
    component: FullScreenPostComponent,
  },
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
  {
    path: 'edit-profile',
    title: 'Pitchfork | Edit Your Profile',
    component: EditProfileComponent,
  },
];
