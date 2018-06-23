import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExplorerComponent } from './user-explorer.component';

describe('UserExplorerComponent', () => {
  let component: UserExplorerComponent;
  let fixture: ComponentFixture<UserExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
