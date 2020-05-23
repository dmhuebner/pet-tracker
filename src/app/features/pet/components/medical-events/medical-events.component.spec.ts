import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEventsComponent } from './medical-events.component';

describe('MedicalEventsComponent', () => {
  let component: MedicalEventsComponent;
  let fixture: ComponentFixture<MedicalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
