import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';
import { ShowYesProfileByIdComponent } from './components/show-yes-profile-by-id/show-yes-profile-by-id.component';

const routes: Routes = [
  {
    path: 'yesProfilelist',
    component: YesProfileListComponent
  },
  {
    path: 'showYesProfileById/:id',
    component: ShowYesProfileByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
