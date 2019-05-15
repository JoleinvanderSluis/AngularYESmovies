import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesMoviesComponent } from './yes-movies/yes-movies.component';
import { YesProfileListComponent } from './components/yes-profile-list/yes-profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    YesMoviesComponent,
    YesProfileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
