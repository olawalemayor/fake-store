import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  IPaystackResponse,
  IFlutterwaveResponse,
} from '../models/payment-response';
import { DOCUMENT } from '@angular/common';

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
    return this._http.post<IFlutterwaveResponse>(
      'flutter-api/payments',
      {
        tx_ref: new Date().toString(),
        amount,
        currency: 'USD',
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
          logo: 'http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${environment.flutterSecretKey}`,
          'content-type': 'application/json',
        },
      }
    );
  }
}
