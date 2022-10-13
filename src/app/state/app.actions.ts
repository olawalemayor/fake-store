import { createAction } from '@ngrx/store';

export const toggleCartVisibility = createAction(
  '[Cart] Toggle Cart Visibility'
);

export const closeCart = createAction('[Cart] Close Cart');
