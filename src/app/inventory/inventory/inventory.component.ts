import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY');

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  inventoryItems: any[] = [];

  async ngOnInit() {
    const { data, error } = await supabase.from('inventory').select('*');
    if (data) {
      this.inventoryItems = data;
    }
  }
}
