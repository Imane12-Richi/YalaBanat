import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from '../../models/voyage.model'; // Assurez-vous que le modèle existe

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private apiUrl = 'http://localhost:8080/api/voyages'; // URL de ton backend

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les trajets
  listerVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiUrl);
  }

  // Méthode pour rechercher des trajets en fonction des critères
  rechercherVoyages(depart: string, destination: string, dateDepart: string): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(`${this.apiUrl}/recherche?depart=${depart}&destination=${destination}&dateDepart=${dateDepart}`);
  }
}
