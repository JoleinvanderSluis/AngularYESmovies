import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent} from './create-movie/create-movie.component';
import { MovieShowComponent } from './movie-show/movie-show.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/create',
    component: CreateMovieComponent
  },
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MovieShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
