import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPopopModalComponent } from './demo-popop-modal.component';

describe('DemoPopopModalComponent', () => {
  let component: DemoPopopModalComponent;
  let fixture: ComponentFixture<DemoPopopModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPopopModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPopopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
