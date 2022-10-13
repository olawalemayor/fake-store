import { NgModule } from '@angular/core';
import { PagesModule } from 'src/app/pages/pages.module';
import { UIModule } from '../ui.module';

import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [UIModule, PagesModule, AppRoutingModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
  providers: [],
})
export class LayoutModule {}
