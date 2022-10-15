import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPageState, cartSelector, getCartTotal } from '../state/page.reducer';
import { Observable, of, takeUntil } from 'rxjs';
import { ICart } from '../../models/cart';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { clearCart } from '../state/page.actions';
import { IAppState } from '../../state/app.reducer';
import { closeCart } from '../../state/app.actions';

@Component({
  selector: 'fs-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private store: Store<IPageState>,
    private appStore: Store<IAppState>,
    private router: Router,
    private paymentService: PaymentService
  ) {}

  cart$!: Observable<ICart[]>;
  cartTotal!: Observable<number>;
  sub = of();

  userEmail!: string;

  paymentErrorMessage!: string;

  // By default
  paymentMethod = 'flutterwave';

  makePayment() {
    switch (this.paymentMethod) {
      case 'paystack':
        this.cartTotal.pipe(takeUntil(this.sub)).subscribe((total) => {
          this.paymentService
            .payWithPaystack(total, this.userEmail)
            .pipe(takeUntil(this.sub))
            .subscribe((res) => {
              if (!res.status) {
                this.paymentErrorMessage = res.message;
              } else {
                window.location.href = res.data.authorization_url;
              }
            });
        });
        break;

      case 'flutterwave':
        this.cartTotal.pipe(takeUntil(this.sub)).subscribe((total) => {
          this.paymentService.payWithFlutterWave(total, this.userEmail);
        });
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
    this.appStore.dispatch(closeCart());

    this.cart$ = this.store.select(cartSelector);
    this.cartTotal = this.store.select(getCartTotal);
  }
}
