import { IApp } from './app.state';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppActions from './app.actions';

export interface IAppState extends IApp {
  isCartVisible: boolean;
}

const initialState: IAppState = {
  isCartVisible: false,
};

const getAppFeature = createFeatureSelector<IAppState>('app');

export const getCartVisibility = createSelector(
  getAppFeature,
  (state) => state.isCartVisible
);

export const appReducer = createReducer(
  initialState,

  on(AppActions.toggleCartVisibility, (state): IAppState => {
    return {
      ...state,
      isCartVisible: !state.isCartVisible,
    };
  }),

  on(AppActions.closeCart, (state): IAppState => {
    return {
      ...state,
      isCartVisible: false,
    };
  })
);
