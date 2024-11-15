import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,  // Ensure RouterModule is imported here
  ],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  async ngOnInit() {
    const session = await this.authService.getSession();
    if (session) {
      this.router.navigate(['/dashboard']);
    }
  }
}
