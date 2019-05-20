import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = "http://localhost:4200";

  private endpoint: string = "movies";

  constructor(private httpClient: HttpClient) { }
  
  list(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Movie
  }
  
  create(movie: Movie): Observable<Movie>{
    let resultFromService: Observable<Movie> = this.httpClient.post<Movie>(`${this.url}/${this.endpoint}`, movie);
    
    return resultFromService;
  }
  
  findById(id: Number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/${this.endpoint}/${id}`);
  }
}

