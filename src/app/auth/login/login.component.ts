import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  showSignUp: boolean = false; // Toggle for showing Sign-Up form
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    // Check if the user is authenticated
    const session = await this.authService.getSession();
    this.isAuthenticated = !!session;  // Set isAuthenticated based on session
    if (this.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    }
  }

  async onSubmit() {
    try {
      let response;
      if (this.showSignUp) {
        // Sign up
        response = await this.authService.signup(this.email, this.password);
      } else {
        // Log in
        response = await this.authService.login(this.email, this.password);
      }

      if (response.error) {
        alert(`${this.showSignUp ? 'Sign Up' : 'Log In'} failed: ${response.error.message}`);
        return;
      }
      alert(`${this.showSignUp ? 'Sign Up' : 'Log In'} successful!`);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Error during authentication', error);
    }
  }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;  // Toggle between Login and Sign-Up
  }
}
