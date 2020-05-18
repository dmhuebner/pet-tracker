import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicationContainerComponent } from './new-medication-container.component';

describe('NewMedicationContainerComponent', () => {
  let component: NewMedicationContainerComponent;
  let fixture: ComponentFixture<NewMedicationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
