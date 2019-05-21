import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YesProfile } from '../model/yes-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  createYesProfile( yesProfile: YesProfile){
    console.log("In createYesProfile" + yesProfile)
    return this.httpClient.post('http://localhost:8080/api/yesProfiles',yesProfile);
  }

  getYesProfileList() {
    return this.httpClient.get('http://localhost:8080/api/yesProfiles');
  }

  findYesProfileById(id: Number){
    return this.httpClient.get('http://localhost:8080/api/yesProfiles/${id}');
  } 
}
