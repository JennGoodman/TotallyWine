import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/Inventory';

@Component({
  selector: 'app-big-wine-item',
  templateUrl: './big-wine-item.component.html',
  styleUrls: ['./big-wine-item.component.css']
})
export class BigWineItemComponent implements OnInit {

  invItem: Inventory = JSON.parse(localStorage.getItem('Item'));

  constructor() { }

  ngOnInit() {
  }

}
