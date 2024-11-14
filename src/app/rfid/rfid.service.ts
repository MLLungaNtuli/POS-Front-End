import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RfidService {
  private apiUrl = 'YOUR_DOTNET_CORE_MIDDLEWARE_URL'; // URL of your middleware

  constructor(private http: HttpClient) {}

  scanRfid(rfidTag: string) {
    return this.http.post(`${this.apiUrl}/scan`, { rfid_tag: rfidTag });
  }
}
