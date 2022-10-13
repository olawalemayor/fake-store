import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from '../components/cart-icon/cart.component';
import { CartViewComponent } from '../views/cart/cart.component';
import { SharedModule } from '../modules/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent, CartComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartViewComponent,
  ],
  providers: [],
})
export class UIModule {}
