import { Component, Input, OnInit } from '@angular/core';
import { ICart } from '../../models/cart';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  cartSelector,
  getCartTotal,
  IPageState,
} from '../../pages/state/page.reducer';
import { IProduct } from 'src/app/models/product';
import { removeFromCart } from 'src/app/pages/state/page.actions';

@Component({
  selector: 'fs-cart-table',
  templateUrl: 'cart-table.component.html',
})
export class CartTableComponent implements OnInit {
  constructor(private store: Store<IPageState>) {}

  cart$!: Observable<ICart[]>;

  cartTotal$!: Observable<number>;

  removeCartItem(product: IProduct) {
    this.store.dispatch(removeFromCart({ product }));
  }

  ngOnInit() {
    this.cart$ = this.store.select(cartSelector);
    this.cartTotal$ = this.store.select(getCartTotal);
  }
}
