import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendMovieComponent } from './recommend-movie.component';

describe('RecommendMovieComponent', () => {
  let component: RecommendMovieComponent;
  let fixture: ComponentFixture<RecommendMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
