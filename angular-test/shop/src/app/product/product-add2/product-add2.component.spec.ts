import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdd2Component } from './product-add2.component';

describe('ProductAdd2Component', () => {
  let component: ProductAdd2Component;
  let fixture: ComponentFixture<ProductAdd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
