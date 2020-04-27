import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileContainerComponent } from './pet-profile-container.component';

describe('PetProfileContainerComponent', () => {
  let component: PetProfileContainerComponent;
  let fixture: ComponentFixture<PetProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProfileContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
