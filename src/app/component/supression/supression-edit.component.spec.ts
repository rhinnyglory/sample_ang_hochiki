import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupressionEditComponent } from './supression-edit.component';

describe('SupressionEditComponent', () => {
  let component: SupressionEditComponent;
  let fixture: ComponentFixture<SupressionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupressionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupressionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
