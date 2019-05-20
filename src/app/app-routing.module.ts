import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieCreateComponent} from './movie-create/movie-create.component';
import { MovieShowComponent } from './movie-show/movie-show.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/create',
    component: MoviesCreateComponent
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
