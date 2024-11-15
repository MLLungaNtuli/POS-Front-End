import { Component, OnInit } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';  // Import MatListModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure animations are enabled

// Initialize Supabase client
const supabase: SupabaseClient = createClient('https://kiohtfrkhllpebnsofyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpb2h0ZnJraGxscGVibnNvZnlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MDk0MTAsImV4cCI6MjA0NzE4NTQxMH0.cikMAdi27y3Dt-8HZxaZ9UWJyK6YpYU69mqk0mrgz80');

@Component({
  selector: 'app-inventory',
  standalone: true, // Mark as standalone component
  imports: [
    FormsModule,
    MatListModule,  // Import MatListModule for the list functionality
    BrowserAnimationsModule, // Ensure animations are enabled
  ],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventoryItems: any[] = [];

  // Fetch inventory data on component initialization
  async ngOnInit() {
    const { data, error } = await supabase.from('inventory').select('*');
    if (data) {
      this.inventoryItems = data;
    }
  }
}
