import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';

const routes: Routes = [
  {
    path: 'yesProfilelist',
    component: YesProfileListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
