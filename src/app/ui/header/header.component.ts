import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPageState } from 'src/app/pages/state/page.reducer';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/models/cart';
import { cartSelector } from '../../pages/state/page.reducer';
import { IAppState, getCartVisibility } from '../../state/app.reducer';
import { toggleCartVisibility } from '../../state/app.actions';

@Component({
  selector: 'fs-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    private store: Store<IPageState>,
    private appStore: Store<IAppState>
  ) {}

  cart$!: Observable<ICart[]>;

  isCartVisible$!: Observable<boolean>;

  toggleCartView() {
    this.appStore.dispatch(toggleCartVisibility());

    this.cart$ = this.store.select(cartSelector);
  }

  ngOnInit(): void {
    this.isCartVisible$ = this.appStore.select(getCartVisibility);
  }
}
