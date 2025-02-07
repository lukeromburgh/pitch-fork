import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {
  constructor(public router: Router) {}

  Home() {
    this.router.navigate(['/']);
  }
}
