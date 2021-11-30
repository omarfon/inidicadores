import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMonthComponent } from './detail-month.component';

describe('DetailMonthComponent', () => {
  let component: DetailMonthComponent;
  let fixture: ComponentFixture<DetailMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
