import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColorsPageComponent } from './admin-colors-page.component';

describe('AdminColorsPageComponent', () => {
  let component: AdminColorsPageComponent;
  let fixture: ComponentFixture<AdminColorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminColorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
