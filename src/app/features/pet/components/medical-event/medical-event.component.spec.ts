import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEventComponent } from './medical-event.component';

describe('MedicalEventComponent', () => {
  let component: MedicalEventComponent;
  let fixture: ComponentFixture<MedicalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
