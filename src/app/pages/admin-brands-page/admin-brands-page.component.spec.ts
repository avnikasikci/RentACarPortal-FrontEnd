import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandsPageComponent } from './admin-brands-page.component';

describe('AdminBrandsPageComponent', () => {
  let component: AdminBrandsPageComponent;
  let fixture: ComponentFixture<AdminBrandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBrandsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
