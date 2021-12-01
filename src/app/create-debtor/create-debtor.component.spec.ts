import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDebtorComponent } from './create-debtor.component';

describe('CreateDebtorComponent', () => {
  let component: CreateDebtorComponent;
  let fixture: ComponentFixture<CreateDebtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDebtorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
