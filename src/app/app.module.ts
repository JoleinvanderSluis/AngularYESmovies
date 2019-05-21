import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesMoviesComponent } from './yes-movies/yes-movies.component';

import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

import { FormsModule } from '@angular/forms';
import { MovieShowComponent } from './movie-show/movie-show.component';

import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';
import { ShowYesProfileByIdComponent } from './components/show-yes-profile-by-id/show-yes-profile-by-id.component';
import { GenresComponent } from './components/genres/genres.component';
import { RatingsComponent } from './components/ratings/ratings.component';



@NgModule({
  declarations: [
    AppComponent,
    YesMoviesComponent,

    MoviesComponent,
    CreateMovieComponent,
    MovieShowComponent,

    YesProfileListComponent,
    ShowYesProfileByIdComponent,
    GenresComponent,
    RatingsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,


    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
