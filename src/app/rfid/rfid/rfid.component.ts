import { Component } from '@angular/core';
import { RfidService } from '../rfid.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';  // Added for the button component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For Angular Material animations

@Component({
  selector: 'app-rfid',
  standalone: true, // Mark as standalone component
  imports: [
    FormsModule,         // Import FormsModule for ngModel
    MatFormFieldModule,  // Import MatFormFieldModule for form fields
    MatInputModule,      // Import MatInputModule for input fields
    MatButtonModule,     // Import MatButtonModule for button
    BrowserAnimationsModule, // Ensure animations are enabled
  ],
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.scss']
})
export class RfidComponent {
  rfidTag: string = '';

  constructor(private rfidService: RfidService) {}

  scanRfid() {
    this.rfidService.scanRfid(this.rfidTag).subscribe((result) => {
      alert('RFID Scan Success!');
    }, (error) => {
      alert('Scan failed: ' + error.message);
    });
  }
}
