import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsListItemComponent } from './medications-list-item.component';

describe('MedicationsListItemComponent', () => {
  let component: MedicationsListItemComponent;
  let fixture: ComponentFixture<MedicationsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
