import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductTablePaginationComponent } from '../product-table-pagination/product-table-pagination.component';
import { IPageState, productsSelector } from '../../pages/state/page.reducer';
import * as PageActions from '../../pages/state/page.actions';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product';
import { SORT } from 'src/app/utils/sorting';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fs-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  standalone: true,
  imports: [ProductTablePaginationComponent, CommonModule, RouterModule],
})
export class ProductTableComponent implements OnInit {
  products$!: Observable<IProduct[]>;

  constructor(private store: Store<IPageState>) {}

  // checkCart(id: number) {
  //   let isPresent = false;
  //   const cart$ = this.store.select(cartSelector);

  //   cart$.subscribe((c) => {
  //     const product = c.find((p) => (p.productId = id));

  //     if (!product) {
  //       isPresent = false;
  //     } else {
  //       isPresent = true;
  //     }
  //   });

  //   return isPresent;
  // }

  addToCart(product: IProduct) {
    this.store.dispatch(
      PageActions.addToCart({
        product,
        quantity: 1,
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(PageActions.getProducts({ sort: SORT.Asc, limit: 10 }));

    this.products$ = this.store.select(productsSelector);
  }
}
