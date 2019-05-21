import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "genres";

  constructor(private httpClient: HttpClient) {
  }

  createGenre(genre: Genre){
    console.log("In genre service createGenre" + genre);
    this.httpClient.post(`${this.url}/${this.endpoint}`,genre);
  }

  getGenreList(){
    console.log("In genre service getGenreList")
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }

  getGenreById(id: Number){
    console.log("In genre service getGenreById")
    return this.httpClient.get(`${this.url}/${this.endpoint}/${id}`);
  }
}