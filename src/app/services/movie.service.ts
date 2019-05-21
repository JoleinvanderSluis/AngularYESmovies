import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "movies";

  constructor(private httpClient: HttpClient) {
  }

  createMovie(movie: Movie){
    console.log("In movie service createMovie" + movie);
    return this.httpClient.post(`${this.url}/${this.endpoint}`, movie);
  }

  getMovieList(){
    console.log("In movie service getMovieList")
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }
}
