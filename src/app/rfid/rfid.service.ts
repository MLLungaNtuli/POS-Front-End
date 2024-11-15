import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RfidService {
  private apiUrl = 'http:localhost:500'; // URL of your middleware exapmle that will communicate with advanCloud

  constructor(private http: HttpClient) {}

  scanRfid(rfidTag: string) {
    return this.http.post(`${this.apiUrl}/scan`, { rfid_tag: rfidTag });
  }
}
