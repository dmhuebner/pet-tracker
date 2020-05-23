import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetListItemComponent } from './vet-list-item.component';

describe('VetListItemComponent', () => {
  let component: VetListItemComponent;
  let fixture: ComponentFixture<VetListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
