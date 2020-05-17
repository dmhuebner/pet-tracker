import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShotContainerComponent } from './new-shot-container.component';

describe('NewShotContainerComponent', () => {
  let component: NewShotContainerComponent;
  let fixture: ComponentFixture<NewShotContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShotContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
