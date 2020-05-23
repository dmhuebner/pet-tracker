import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVetComponent } from './new-vet.component';

describe('NewVetComponent', () => {
  let component: NewVetComponent;
  let fixture: ComponentFixture<NewVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
