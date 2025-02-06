import { Component } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-page',
  imports: [PostCardComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent {}
