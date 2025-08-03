import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManageItemsComponent,
    InventoryDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InventoryModule { }
