import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPageState, selectedProductSelector } from '../state/page.reducer';
import { addToCart, getSingleProduct } from '../state/page.actions';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product';

@Component({
  selector: 'fs-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<IPageState>
  ) {}

  product$!: Observable<IProduct | undefined>;

  quantity = 1;

  setQuantity(quantity: any) {
    this.quantity = Number(quantity);
  }

  addToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product, quantity: this.quantity }));
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(getSingleProduct({ id }));

    this.product$ = this.store.select(selectedProductSelector);
  }
}
