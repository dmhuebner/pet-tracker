import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotsContainerComponent } from './shots-container.component';

describe('ShotsContainerComponent', () => {
  let component: ShotsContainerComponent;
  let fixture: ComponentFixture<ShotsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
