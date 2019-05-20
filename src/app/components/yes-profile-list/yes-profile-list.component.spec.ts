import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesProfileListComponent } from './yes-profile-list.component';

describe('YesProfileListComponent', () => {
  let component: YesProfileListComponent;
  let fixture: ComponentFixture<YesProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
