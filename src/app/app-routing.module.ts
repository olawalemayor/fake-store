import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaidSucessfulComponent } from './pages/paid-sucessful/paid-sucessful.component';
import {
  CheckoutComponent,
  ProductDetailsComponent,
  ProductListComponent,
} from './pages';

const routes: Routes = [
  { path: 'paid-success', component: PaidSucessfulComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
