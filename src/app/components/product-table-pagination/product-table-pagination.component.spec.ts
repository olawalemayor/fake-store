import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTablePaginationComponent } from './product-table-pagination.component';

describe('ProductTablePaginationComponent', () => {
  let component: ProductTablePaginationComponent;
  let fixture: ComponentFixture<ProductTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTablePaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
