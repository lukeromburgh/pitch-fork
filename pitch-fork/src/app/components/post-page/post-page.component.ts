import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-page',
  imports: [RouterOutlet],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
  standalone: true,
})
export class PostPageComponent {
  constructor(public router: Router) {}

  Posts() {
    this.router.navigate(['/posts']);
  }
}
