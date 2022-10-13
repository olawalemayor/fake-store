import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../state/app.reducer';
import { closeCart } from '../../state/app.actions';

@Component({
  selector: 'fs-layout',
  templateUrl: 'layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(private appStore: Store<IAppState>) {}

  closeCart() {
    this.appStore.dispatch(closeCart());
  }

  ngOnInit() {}
}
