import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';
import { ShowYesProfileByIdComponent } from './components/show-yes-profile-by-id/show-yes-profile-by-id.component';
import { GenresComponent } from './components/genres/genres.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { MoviesComponent } from './components/movies/movies.component';
const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
