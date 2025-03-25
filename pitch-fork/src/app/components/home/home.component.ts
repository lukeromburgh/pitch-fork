import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { BentoGridComponent } from '../bento-grid/bento-grid.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HttpClientModule, CommonModule, BentoGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
}) // implements OnInit
export class HomeComponent {
  posts = [
    {
      src: 'avatar-1.png',
      username: 'Alice_Writes',
      title: 'The Beauty of Nature',
      content:
        'Nature has a way of soothing the soul. A walk in the forest, the chirping of birds, and the rustling leaves can be deeply rejuvenating.',
      date_posted: new Date(2024, 1, 14),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-2.png',
      username: 'TechGuy99',
      title: 'AI is Taking Over?',
      content:
        'Artificial intelligence is evolving rapidly. Will it replace human jobs, or create new opportunities?',
      date_posted: new Date(2024, 1, 10),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-3.png',
      username: 'GamerDude',
      title: 'Top 5 Games of the Year',
      content:
        'This year has been amazing for gaming! My top picks are Elden Ring, Baldur’s Gate 3, and more.',
      date_posted: new Date(2024, 0, 5),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-4.png',
      username: 'ChefMaster',
      title: 'Easy 5-Minute Meals',
      content:
        'Here are some quick recipes for busy people who still want to eat delicious food.',
      date_posted: new Date(2024, 1, 8),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-5.png',
      username: 'BookWorm',
      title: 'Must-Read Books of 2024',
      content: 'If you love reading, these 10 books should be on your list!',
      date_posted: new Date(2024, 1, 12),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-6.png',
      username: 'FitnessPro',
      title: 'How to Stay Motivated at the Gym',
      content:
        'Staying consistent is the hardest part of fitness. Here’s how I do it.',
      date_posted: new Date(2024, 1, 2),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-7.png',
      username: 'MusicLover',
      title: 'Best Albums of 2024 So Far',
      content: 'New releases have been fantastic! Let’s discuss the best ones.',
      date_posted: new Date(2024, 0, 28),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-8.png',
      username: 'CryptoKing',
      title: 'Is Bitcoin Still Worth Investing In?',
      content:
        'Crypto markets are volatile, but here’s why I still believe in Bitcoin.',
      date_posted: new Date(2024, 1, 9),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-9.png',
      username: 'TravelJunkie',
      title: 'Hidden Gems Around the World',
      content:
        'Check out these lesser-known travel destinations that are breathtaking!',
      date_posted: new Date(2024, 0, 22),
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: 'avatar-10.png',
      username: 'HistoryBuff',
      title: 'The Forgotten War of 1812',
      content: 'This historical event shaped nations but is often overlooked.',
      date_posted: new Date(2024, 1, 7),
      offsetX: 0,
      offsetY: 0,
    },
  ];

  constructor(public router: Router, private authService: AuthService) {}

  Home() {
    this.router.navigate(['/']);
  }
}
