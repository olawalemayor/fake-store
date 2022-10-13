import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPageState, categoriesSelector } from '../../pages/state/page.reducer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  getAllCategories,
  getProductByCategory,
} from '../../pages/state/page.actions';
import { FormsModule } from '@angular/forms';
import { SORT } from '../../utils/sorting';
import { getProducts } from '../../pages/state/page.actions';

@Component({
  selector: 'fs-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProductFilterComponent implements OnInit {
  constructor(private store: Store<IPageState>) {}

  categories$!: Observable<string[]>;

  category = '';

  sorting: SORT = SORT.Asc;

  handleCategoryChange() {
    this.store.dispatch(
      getProductByCategory({
        category: this.category,
        sort: this.sorting,
        limit: 10,
      })
    );
  }

  handleSort() {
    this.store.dispatch(getProducts({ sort: this.sorting, limit: 10 }));
  }

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.store.dispatch(getAllCategories());
  }
}
