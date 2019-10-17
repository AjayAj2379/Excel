import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NngxChartsComponent } from './nngx-charts.component';

describe('NngxChartsComponent', () => {
  let component: NngxChartsComponent;
  let fixture: ComponentFixture<NngxChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NngxChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NngxChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
