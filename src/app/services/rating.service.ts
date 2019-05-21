import { Injectable } from '@angular/core';
import { Rating } from '../model/rating';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "ratings";

  constructor(private httpClient: HttpClient) {
  }

  createRating(movieID: number, yesProfileID: number, rating: Rating){
    console.log("In rating service createRating" + rating);
    return this.httpClient.post(`${this.url}/${this.endpoint}/${movieID}/${yesProfileID}/addRatingToMovieAndProfile`, rating);
  }
}
