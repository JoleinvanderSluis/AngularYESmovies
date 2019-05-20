import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYesProfileByIdComponent } from './show-yes-profile-by-id.component';

describe('ShowYesProfileByIdComponent', () => {
  let component: ShowYesProfileByIdComponent;
  let fixture: ComponentFixture<ShowYesProfileByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowYesProfileByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYesProfileByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
