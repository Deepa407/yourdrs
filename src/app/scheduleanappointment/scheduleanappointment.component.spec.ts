import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleanappointmentComponent } from './scheduleanappointment.component';

describe('ScheduleanappointmentComponent', () => {
  let component: ScheduleanappointmentComponent;
  let fixture: ComponentFixture<ScheduleanappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleanappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleanappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
