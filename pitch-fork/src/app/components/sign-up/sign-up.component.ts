import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initializing the form with necessary validation
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method to handle the signup form submission
  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      this.authService.signup(signupData).subscribe(
        (response) => {
          console.log('Signup successful!', response);
          // Redirect to login page after successful signup
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Signup failed:', error);
          // Optional: Show error message on UI
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
