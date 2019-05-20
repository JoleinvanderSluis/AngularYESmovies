import { Injectable } from '@angular/core';
import { Rating } from '../model/rating';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Rating[]> {
    return this.httpClient.get<Rating[]>('http://localhost:8080/api/ratings');
  }

  findById(id: Number): Observable<Rating> {
    return this.httpClient.get<Rating>('http://localhost:8080/api/ratings/${id}');
  } 
}
