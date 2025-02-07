import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostPageComponent } from './components/post-page/post-page.component';

export const routes: Routes = [
  { path: '', title: 'Home', pathMatch: 'full', component: HomeComponent },
  { path: 'posts', title: 'Posts', component: PostPageComponent },
];
