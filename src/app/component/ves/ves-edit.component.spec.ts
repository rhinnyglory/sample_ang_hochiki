import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesEditComponent } from './ves-edit.component';

describe('VesEditComponent', () => {
  let component: VesEditComponent;
  let fixture: ComponentFixture<VesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
