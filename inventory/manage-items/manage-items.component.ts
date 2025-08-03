import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../interface/item.model';
import { InventoryService } from '../../inventory.service';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent {
  newItem: Item = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: ''
  };

  constructor(private inventoryService: InventoryService, private router: Router) {}

  addItem(): void {
    this.inventoryService.addItem({ ...this.newItem });
    this.newItem = { id: 0, name: '', price: 0, quantity: 0, category: '' };
  }

  dashboard_click(): void {
    this.router.navigate(['/inventory-dashboard']);
  }
}
