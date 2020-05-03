import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetContainerComponent } from './new-pet-container.component';

describe('NewPetContainerComponent', () => {
  let component: NewPetContainerComponent;
  let fixture: ComponentFixture<NewPetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
