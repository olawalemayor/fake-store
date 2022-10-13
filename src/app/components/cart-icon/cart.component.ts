import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { IPageState, cartSelector } from '../../pages/state/page.reducer';

@Component({
  selector: 'fs-cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent implements OnInit {
  constructor(private store: Store<IPageState>) {}

  cart$!: Observable<ICart[]>;

  ngOnInit() {
    this.cart$ = this.store.select(cartSelector);
  }
}
