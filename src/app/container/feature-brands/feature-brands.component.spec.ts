import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBrandsComponent } from './feature-brands.component';

describe('FeatureBrandsComponent', () => {
  let component: FeatureBrandsComponent;
  let fixture: ComponentFixture<FeatureBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureBrandsComponent]
    });
    fixture = TestBed.createComponent(FeatureBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
