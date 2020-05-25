import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicalEventComponent } from './new-medical-event.component';

describe('NewMedicalEventComponent', () => {
  let component: NewMedicalEventComponent;
  let fixture: ComponentFixture<NewMedicalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
