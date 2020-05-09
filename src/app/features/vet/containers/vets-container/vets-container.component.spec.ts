import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetsContainerComponent } from './vets-container.component';

describe('VetsContainerComponent', () => {
  let component: VetsContainerComponent;
  let fixture: ComponentFixture<VetsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
