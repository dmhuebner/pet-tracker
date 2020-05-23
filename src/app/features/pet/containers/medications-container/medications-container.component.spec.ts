import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsContainerComponent } from './medications-container.component';

describe('MedicationsContainerComponent', () => {
  let component: MedicationsContainerComponent;
  let fixture: ComponentFixture<MedicationsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
