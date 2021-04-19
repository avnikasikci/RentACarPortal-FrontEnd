import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChildComponent } from './navbar-child.component';

describe('NavbarChildComponent', () => {
  let component: NavbarChildComponent;
  let fixture: ComponentFixture<NavbarChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
