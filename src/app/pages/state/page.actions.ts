import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product';
import { SORT } from '../../utils/sorting';

// Get All Products
export const getProducts = createAction(
  '[Product] Get All Products',
  props<{ sort: SORT; limit: number }>()
);

export const getProductsSuccess = createAction(
  '[Product] Get All Products Successful',
  props<{ products: IProduct[] }>()
);

export const getProductsFail = createAction(
  '[Product] Get All Products Failure',
  props<{ error: string }>()
);

// Get Single Product
export const getSingleProduct = createAction(
  '[Product] Get Single Products',
  props<{ id: number }>()
);

export const getSingleProductSuccess = createAction(
  '[Product] Get Single Products SuccessFully',
  props<{ product: IProduct }>()
);

export const getSingleProductFail = createAction(
  '[Product] Get Single Products Failure',
  props<{ error: string }>()
);

// Get categories
export const getAllCategories = createAction('[Category] Get All Categories');

export const getAllCategoriesSuccess = createAction(
  '[Category] Get All Categories Successful',
  props<{ categories: string[] }>()
);

export const getAllCategoriesFail = createAction(
  '[Category] Get All Categories Failure',
  props<{ error: string }>()
);

// Get Products By Category
export const getProductByCategory = createAction(
  '[Product] Get Product By Category',
  props<{ category: string; sort: SORT; limit: number }>()
);

export const getProductByCategorySuccess = createAction(
  '[Product] Get Product By Category Successful',
  props<{ products: IProduct[] }>()
);

export const getProductByCategoryFail = createAction(
  '[Product] Get Product By Category Failure',
  props<{ error: string }>()
);

// Cart Actions
export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: IProduct; quantity: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ product: IProduct }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
