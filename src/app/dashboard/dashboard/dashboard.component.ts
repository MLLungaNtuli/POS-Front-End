import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure animations are available

@Component({
  selector: 'app-dashboard',
  standalone: true, // Mark as standalone component
  imports: [
    MatCardModule,   // Import the MatCardModule
    BrowserAnimationsModule, // Ensure animations are enabled
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Your component logic here
}
