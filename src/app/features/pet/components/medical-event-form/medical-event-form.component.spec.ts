import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEventFormComponent } from './medical-event-form.component';

describe('MedicalEventFormComponent', () => {
  let component: MedicalEventFormComponent;
  let fixture: ComponentFixture<MedicalEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
