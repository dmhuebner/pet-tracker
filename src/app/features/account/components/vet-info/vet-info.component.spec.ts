import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetInfoComponent } from './vet-info.component';

describe('VetInfoComponent', () => {
  let component: VetInfoComponent;
  let fixture: ComponentFixture<VetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
