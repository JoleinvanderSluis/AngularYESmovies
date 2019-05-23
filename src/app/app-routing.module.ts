import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';
import { ShowYesProfileByIdComponent } from './components/show-yes-profile-by-id/show-yes-profile-by-id.component';
import { GenresComponent } from './components/genres/genres.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { SearchMovieComponent} from './components/search-movie/search-movie.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'yesProfilelist',
    component: YesProfileListComponent
  },
  {
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
  },

  {
    path: 'search-movie',
    component: SearchMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }