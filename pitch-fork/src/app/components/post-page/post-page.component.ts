import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  posts: any[] = [];

  tags: string[] = [
    'Tech',
    'AI & Machine Learning',
    'Blockchain & Crypto',
    'SaaS',
    'E-commerce',
    'FinTech',
    'HealthTech',
    'EdTech',
    'GreenTech',
    'Cybersecurity',
    'Web3',
    'Metaverse',
    'No-Code & Low-Code',
    'AR/VR',
    'Remote Work Tools',
    'Productivity',
    'Marketing & Growth',
    'Social Impact',
    'Game Dev',
    'AI Agents & Automation',
    'D2C & Consumer Brands',
    'SpaceTech',
    'BioTech',
    'LegalTech',
    'Streaming',
    'Hardware',
    'Transportation',
    'Site Builder',
    'API',
    'Dashboard',
  ];

  selectedTags: string[] = [];

  toggleTag(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index > -1) {
      this.selectedTags.splice(index, 1); // Remove if already selected
    } else {
      this.selectedTags.push(tag); // Add if not selected
    }
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getPosts().subscribe(
      (data) => {
        console.log('Posts received:', data); // Debugging: See the fetched posts
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
