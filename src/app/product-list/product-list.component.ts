import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products = [{
  Name:'Portable monitor',Price:'R2,699',Description:'Asus MB168B 15.6',img:''
}];
  constructor() { }

  ngOnInit() {
  }

}