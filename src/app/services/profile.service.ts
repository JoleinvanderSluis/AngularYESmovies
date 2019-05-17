import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YesProfile } from '../model/yes-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<YesProfile[]> {
  
    return this.httpClient.get<YesProfile[]>('http://localhost:8080/api/yesProfiles');
  }

  findById(id: Number): Observable<YesProfile> {
    return this.httpClient.get<YesProfile>('http://localhost:8080/api/yesProfiles/${id}');
  } 
}
