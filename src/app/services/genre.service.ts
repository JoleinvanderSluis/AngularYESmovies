import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "genres";

  constructor(private httpClient: HttpClient) {

  }

  list(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Genre
  }
}