import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTopAdminComponent } from './navbar-top-admin.component';

describe('NavbarTopAdminComponent', () => {
  let component: NavbarTopAdminComponent;
  let fixture: ComponentFixture<NavbarTopAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTopAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTopAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
