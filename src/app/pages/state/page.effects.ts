import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as PageActions from './page.actions';
import { ProductService } from '../../services/product.service';

@Injectable({ providedIn: 'root' })
export class PageEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.getProducts),
      mergeMap(({ sort, limit }) =>
        this.productService.getAllProducts(sort, limit).pipe(
          map((products) => PageActions.getProductsSuccess({ products })),
          catchError((error) => of(PageActions.getProductsFail({ error })))
        )
      )
    );
  });

  loadSingleProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.getSingleProduct),
      mergeMap(({ id }) =>
        this.productService.getProduct(id).pipe(
          map((product) => PageActions.getSingleProductSuccess({ product })),
          catchError((error) => of(PageActions.getSingleProductFail({ error })))
        )
      )
    );
  });

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.getAllCategories),
      mergeMap(() =>
        this.productService.getAllCategories().pipe(
          map((categories) =>
            PageActions.getAllCategoriesSuccess({ categories })
          ),
          catchError((error) => of(PageActions.getAllCategoriesFail({ error })))
        )
      )
    );
  });

  loadProductsByCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.getProductByCategory),
      mergeMap(({ category, limit, sort }) =>
        this.productService.getCategoryProduct(category, sort, limit).pipe(
          map((products) =>
            PageActions.getProductByCategorySuccess({ products })
          ),
          catchError((error) =>
            of(PageActions.getProductByCategoryFail({ error }))
          )
        )
      )
    );
  });
}
