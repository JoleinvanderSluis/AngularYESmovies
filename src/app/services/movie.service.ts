import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:4200";
  private endpoint: string = "movies";

  create(movie: Movie): Observable<Movie>{
    console.log("In movie service create" + movie)
    let resultFromService: Observable<Movie> = this.httpClient.post<Movie>(`${this.url}/${this.endpoint}`, movie);
    return resultFromService;
  }
  
  getMovieList(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Movie
  }
  
  getMovieById(id: Number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/${this.endpoint}/${id}`);
  }
}

