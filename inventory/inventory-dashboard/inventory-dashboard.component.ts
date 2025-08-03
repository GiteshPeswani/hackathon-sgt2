import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
import { Item } from '../../interface/item.model';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {
  items: Item[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.items = this.inventoryService.getItems();
  }
}
