import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEventsContainerComponent } from './medical-events-container.component';

describe('MedicalEventsContainerComponent', () => {
  let component: MedicalEventsContainerComponent;
  let fixture: ComponentFixture<MedicalEventsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEventsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEventsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
