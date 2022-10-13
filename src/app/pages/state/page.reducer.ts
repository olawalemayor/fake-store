import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { IProduct } from '../../models/product';
import { ICart } from '../../models/cart';
import * as PageActions from './page.actions';
import { IApp } from '../../state/app.state';

export interface IPageState extends IApp {
  products: IProduct[];
  selectedProduct: IProduct | undefined;
  categories: string[];
  cart: ICart[];
  cartTotal: number;
  errorMessage: string | undefined;
}

const initialState: IPageState = {
  products: [],
  selectedProduct: undefined,
  categories: [],
  cart: [],
  cartTotal: 0,
  errorMessage: undefined,
};

const pageFeatureSelector = createFeatureSelector<IPageState>('pages');

export const productsSelector = createSelector(
  pageFeatureSelector,
  (state) => state.products
);

export const selectedProductSelector = createSelector(
  pageFeatureSelector,
  (state) => state.selectedProduct
);

export const categoriesSelector = createSelector(
  pageFeatureSelector,
  (state) => state.categories
);

export const cartSelector = createSelector(
  pageFeatureSelector,
  (state) => state.cart
);

export const errorSelector = createSelector(
  pageFeatureSelector,
  (state) => state.errorMessage
);

export const getCartTotal = createSelector(
  pageFeatureSelector,
  (state) => state.cartTotal
);

export const pageReducer = createReducer<IPageState>(
  initialState,

  // Get all products
  on(PageActions.getProductsSuccess, (state, action): IPageState => {
    return {
      ...state,
      products: action.products,
    };
  }),

  on(PageActions.getProductsFail, (state, action): IPageState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  // Sort products by category
  on(PageActions.getProductByCategorySuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
    };
  }),

  on(PageActions.getProductByCategoryFail, (state, action): IPageState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  // Get Single Produce
  on(PageActions.getSingleProductSuccess, (state, action) => {
    return {
      ...state,
      selectedProduct: action.product,
    };
  }),

  on(PageActions.getSingleProductFail, (state, action): IPageState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  // Get All Categories
  on(PageActions.getAllCategoriesSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
    };
  }),

  on(PageActions.getAllCategoriesFail, (state, action): IPageState => {
    return {
      ...state,
      errorMessage: action.error,
    };
  }),

  // Add to cart
  on(PageActions.addToCart, (state, action) => {
    const cart: ICart[] = [...state.cart];
    let total = 0;

    const product = cart.find((item) => item.product.id === action.product.id);

    if (product) {
      const index = cart.indexOf(product);

      cart.splice(index, 1);

      let newProduct = {
        product: action.product,
        quantity: product.quantity + 1,
      };

      cart.push(newProduct);

      cart.forEach((item) => {
        total += Number(item.product.price) * item.quantity;
      });
    } else {
      const newCartProduct = {
        product: action.product,
        quantity: action.quantity,
      };

      cart.push(newCartProduct);

      cart.forEach((item) => {
        total += Number(item.product.price) * item.quantity;
      });
    }

    return {
      ...state,
      cart,
      cartTotal: total,
    };
  }),

  on(PageActions.removeFromCart, (state, action): IPageState => {
    const cart = [...state.cart];

    let total = 0;

    const product = cart.find((item) => item.product === action.product);

    if (product) {
      const index = cart.indexOf(product);

      cart.splice(index, 1);

      cart.forEach(
        (item) => (total += Number(item.product.price) * item.quantity)
      );
    }

    return {
      ...state,
      cart,
      cartTotal: total,
    };
  }),

  on(PageActions.clearCart, (state): IPageState => {
    return {
      ...state,
      cart: [],
    };
  })
);
