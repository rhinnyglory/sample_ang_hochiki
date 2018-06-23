import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserExplorerComponent } from './view-user-explorer.component';

describe('ViewUserExplorerComponent', () => {
  let component: ViewUserExplorerComponent;
  let fixture: ComponentFixture<ViewUserExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
