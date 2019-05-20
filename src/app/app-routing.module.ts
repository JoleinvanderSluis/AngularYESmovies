import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';
import { ShowYesProfileByIdComponent } from './components/show-yes-profile-by-id/show-yes-profile-by-id.component';
import { GenresComponent } from './components/genres/genres.component';
import { RatingsComponent } from './components/ratings/ratings.component';
=======
import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent} from './create-movie/create-movie.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
>>>>>>> bbc35b0d2c477af5b413415512b7481ae9e1b827

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
<<<<<<< HEAD
    path: 'showYesProfileById/:id',
    component: ShowYesProfileByIdComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'ratings',
    component: RatingsComponent
=======
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
>>>>>>> bbc35b0d2c477af5b413415512b7481ae9e1b827
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
