import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { pageReducer } from './state/page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PageEffects } from './state/page.effects';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../modules/shared.module';
import { PaidSucessfulComponent } from './paid-sucessful/paid-sucessful.component';

@NgModule({
  imports: [
    ProductListComponent,
    SharedModule,
    StoreModule.forFeature('pages', pageReducer),
    EffectsModule.forFeature([PageEffects]),
    FormsModule,
  ],
  exports: [],
  declarations: [ProductDetailsComponent, CheckoutComponent, PaidSucessfulComponent],
  providers: [],
})
export class PagesModule {}
