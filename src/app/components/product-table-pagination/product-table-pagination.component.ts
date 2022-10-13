import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-product-table-pagination',
  templateUrl: './product-table-pagination.component.html',
  styleUrls: ['./product-table-pagination.component.css'],
  standalone: true,
})
export class ProductTablePaginationComponent implements OnInit {
  constructor() {}

  pageNumber!: number;

  ngOnInit(): void {
    this.pageNumber = 1;
  }
}
