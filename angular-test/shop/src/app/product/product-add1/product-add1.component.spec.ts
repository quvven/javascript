import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdd1Component } from './product-add1.component';

describe('ProductAdd1Component', () => {
  let component: ProductAdd1Component;
  let fixture: ComponentFixture<ProductAdd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
