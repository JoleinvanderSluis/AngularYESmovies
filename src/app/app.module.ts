import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesMoviesComponent } from './yes-movies/yes-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCreateComponent } from './create-movie/create-movie.component';

import { FormsModule } from '@angular/forms';
import { MovieShowComponent } from './movie-show/movie-show.component';

@NgModule({
  declarations: [
    AppComponent,
    YesMoviesComponent,
    MoviesComponent,
    MovieCreateComponent,
    MovieShowComponent
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
