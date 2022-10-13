import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidSucessfulComponent } from './paid-sucessful.component';

describe('PaidSucessfulComponent', () => {
  let component: PaidSucessfulComponent;
  let fixture: ComponentFixture<PaidSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidSucessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
