import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IProduct } from '../models/product';
import { SORT } from '../utils/sorting';

@Injectable({ providedIn: 'root' })
export class ProductService {
  apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getAllProducts(
    sort: SORT = SORT.Asc,
    limit: number = 0
  ): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(
      `${this.apiUrl}/products?limit=${limit}&sort=${sort}`
    );
  }

  getProduct(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.apiUrl}/products/${id}`);
  }

  getAllCategories(): Observable<string[]> {
    return this._http.get<string[]>(`${this.apiUrl}/products/categories`);
  }

  getCategoryProduct(
    category: string,
    sort: SORT = SORT.Asc,
    limit: number = 0
  ) {
    return this._http.get<IProduct[]>(
      `${this.apiUrl}/products/category/${category}?limit=${limit}&sort=${sort}`
    );
  }
}
