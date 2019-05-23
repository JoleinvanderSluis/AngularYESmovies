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
    console.log("In movie service getMovieList");
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }

  addGenre(movieId: number, genreId: number){
    console.log("In movie service addGenre" + genreId)
    return this.httpClient.put(`${this.url}/${this.endpoint}/${movieId}/addgenre/${genreId}`,genreId);
  }

  searchMovies(inputText: string){
    console.log("In movie service searchMovies");
    return this.httpClient.get(`${this.url}/${this.endpoint}/searchMovies/${inputText}`);

  }
}
