import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarsPageComponent } from './admin-cars-page.component';

describe('AdminCarsPageComponent', () => {
  let component: AdminCarsPageComponent;
  let fixture: ComponentFixture<AdminCarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
