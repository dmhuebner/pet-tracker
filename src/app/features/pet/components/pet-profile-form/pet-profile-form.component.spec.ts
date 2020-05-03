import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileFormComponent } from './pet-profile-form.component';

describe('PetProfileFormComponent', () => {
  let component: PetProfileFormComponent;
  let fixture: ComponentFixture<PetProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
