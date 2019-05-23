import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesMoviesComponent } from './yes-movies/yes-movies.component';

import { MoviesComponent } from './components/movies/movies.component';
import { FormsModule } from '@angular/forms';

import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';
import { ShowYesProfileByIdComponent } from './components/show-yes-profile-by-id/show-yes-profile-by-id.component';
import { GenresComponent } from './components/genres/genres.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { HomeComponent } from './components/home/home.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    YesMoviesComponent,

    MoviesComponent,

    YesProfileListComponent,
    ShowYesProfileByIdComponent,
    GenresComponent,
    RatingsComponent,
    HomeComponent,
    SearchMovieComponent

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
