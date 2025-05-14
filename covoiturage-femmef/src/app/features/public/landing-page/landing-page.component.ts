import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Ajouté pour la navigation
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  isMenuOpen = false;

  // Variables pour le formulaire
  depart: string = '';
  destination: string = '';
  dateHeure: string = '';
  passageres: number = 1;

  // Injection du service Router pour la navigation
  constructor(private router: Router) {}

  // Méthode pour rediriger vers la page de recherche
  onSearch() {
    this.router.navigate(['/recherche'], {
      queryParams: {
        depart: this.depart,
        destination: this.destination,
        dateHeure: this.dateHeure,
        passageres: this.passageres
      }
    });
  }
}
