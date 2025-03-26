import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  menuOpen = false;

  constructor(public router: Router) {}

  Home() {
    this.router.navigate(['/']);
    this.menuOpen = false; // Close menu on navigation
  }

  logoOnly() {
    return window.innerWidth < 768; // Hide text on mobile
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
