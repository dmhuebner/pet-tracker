import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetsListComponent } from './vets-list.component';

describe('VetsListComponent', () => {
  let component: VetsListComponent;
  let fixture: ComponentFixture<VetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
