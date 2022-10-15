import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPaystackResponse } from '../models/payment-response';
import { DOCUMENT } from '@angular/common';
import { FlutterwaveRequest } from '../models/flutterwave-request';

declare function FlutterwaveCheckout(data: FlutterwaveRequest): any;

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(
    private _http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  payWithPaystack(amount: number, email: string) {
    return this._http.post<IPaystackResponse>(
      `${environment.paystackApiUrl}/transaction/initialize`,
      {
        email,
        amount: amount * 100,
        callback_url: `${this.document.location.host}/paid-success`,
      },
      {
        headers: {
          Authorization: `Bearer ${environment.paystackPrivateKey}`,
          'content-type': 'application/json',
        },
      }
    );
  }

  payWithFlutterWave(amount: number, email: string) {
    const paymentData: FlutterwaveRequest = {
      public_key: environment.flutterwavePublicKey,
      tx_ref: new Date().toString(),
      amount,
      currency: 'USD',
      payment_options: 'card, banktransfer, ussd',
      redirect_url: `${this.document.location.host}/paid-success`,
      meta: {
        consumer_id: 23,
        consumer_mac: '92a3-912ba-1192a',
      },
      customer: {
        email,
        phonenumber: '080****4528',
        name: 'Test User',
      },
      customizations: {
        title: 'Fake store Payments',
        description: 'Payment for item bought',
        logo: 'http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png',
      },
    };

    return FlutterwaveCheckout(paymentData);
  }
}
