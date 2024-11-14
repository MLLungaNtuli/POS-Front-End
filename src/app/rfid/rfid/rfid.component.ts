import { Component } from '@angular/core';
import { RfidService } from '../rfid.service';

@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
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
