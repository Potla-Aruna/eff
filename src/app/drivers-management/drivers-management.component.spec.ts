import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversManagementComponent } from './drivers-management.component';

describe('DriversManagementComponent', () => {
  let component: DriversManagementComponent;
  let fixture: ComponentFixture<DriversManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
