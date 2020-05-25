import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEventsSearchControlsComponent } from './medical-events-search-controls.component';

describe('MedicalEventsSearchControlsComponent', () => {
  let component: MedicalEventsSearchControlsComponent;
  let fixture: ComponentFixture<MedicalEventsSearchControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEventsSearchControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEventsSearchControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
