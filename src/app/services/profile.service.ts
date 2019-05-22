import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YesProfile } from '../model/yes-profile';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "yesProfiles";

  createYesProfile( yesProfile: YesProfile){
    console.log("In profile service createYesProfile" + yesProfile)
    return this.httpClient.post(`${this.url}/${this.endpoint}`,yesProfile);
  }

  addFavouriteGenre(yesProfileId: number, genreId: number){
    console.log("In profile service addFavouriteGenre" + genreId)
    return this.httpClient.put(`${this.url}/${this.endpoint}/${yesProfileId}/addPreferredGenre/${genreId}`,genreId);
  }

  getYesProfileList() {
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }
}
