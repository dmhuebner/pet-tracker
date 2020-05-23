import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInfoContainerComponent } from './medical-info-container.component';

describe('MedicalInfoContainerComponent', () => {
  let component: MedicalInfoContainerComponent;
  let fixture: ComponentFixture<MedicalInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
