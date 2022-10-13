import { NgModule } from '@angular/core';
import { CartTableComponent } from '../components/cart-table/cart-table.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [CartTableComponent, RouterModule, CommonModule],
  declarations: [CartTableComponent],
  providers: [],
})
export class SharedModule {}
