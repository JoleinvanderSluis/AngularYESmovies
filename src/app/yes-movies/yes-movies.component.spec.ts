import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesMoviesComponent } from './yes-movies.component';

describe('YesMoviesComponent', () => {
  let component: YesMoviesComponent;
  let fixture: ComponentFixture<YesMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
