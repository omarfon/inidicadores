import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInternComponent } from './layout-intern.component';

describe('LayoutInternComponent', () => {
  let component: LayoutInternComponent;
  let fixture: ComponentFixture<LayoutInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
