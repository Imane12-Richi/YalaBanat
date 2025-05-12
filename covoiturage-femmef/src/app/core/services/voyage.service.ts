import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from '../../models/voyage.model'; 
@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private apiUrl = 'http://localhost:8080/api/voyages'; // ou autre URL selon ton backend

  constructor(private http: HttpClient) {}

  listerVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiUrl);
  }
}
