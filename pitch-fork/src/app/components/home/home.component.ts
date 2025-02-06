import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {}
