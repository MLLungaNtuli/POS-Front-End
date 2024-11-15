import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { RfidComponent } from './rfid/rfid/rfid.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'rfid', component: RfidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Make sure to use forRoot
  exports: [RouterModule],
})
export class AppRoutingModule {}
