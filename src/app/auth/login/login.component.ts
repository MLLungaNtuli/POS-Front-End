import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async onLogin() {
    const { data, error } = await this.authService.login(this.email, this.password);
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Login successful!');
    }
  }
}
