import { Component, OnInit } from '@angular/core';
import { ProductTableComponent } from '../../components/product-table/product-table.component';
import { ProductFilterComponent } from '../../components/product-filter/product-filter.component';

@Component({
  selector: 'fs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [ProductTableComponent, ProductFilterComponent],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
