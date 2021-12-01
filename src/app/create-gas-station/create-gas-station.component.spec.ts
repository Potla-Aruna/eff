import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGasStationComponent } from './create-gas-station.component';

describe('CreateGasStationComponent', () => {
  let component: CreateGasStationComponent;
  let fixture: ComponentFixture<CreateGasStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGasStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGasStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
