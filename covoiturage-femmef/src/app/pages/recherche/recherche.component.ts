import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../../core/services/voyage.service';
import { Voyage } from '../../models/voyage.model';

@Component({
  selector: 'app-recherche',
  standalone: true,
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RechercheComponent implements OnInit {
  form: FormGroup;
  minDateTime: string;
  showResults = false;
  trajets: Voyage[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private voyageService: VoyageService
  ) {
    this.minDateTime = new Date().toISOString().slice(0, 16);
    this.form = this.fb.group({
      depart: ['', Validators.required],
      destination: ['', Validators.required],
      dateHeure: ['', Validators.required],  // correspond au formControlName dans le HTML
      passageres: [1, [Validators.required, Validators.min(1)]],  // idem ici
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['depart']) this.form.patchValue({ depart: params['depart'] });
      if (params['destination']) this.form.patchValue({ destination: params['destination'] });
      if (params['dateHeure']) this.form.patchValue({ dateHeure: params['dateHeure'] });
      if (params['passageres']) this.form.patchValue({ passageres: params['passageres'] });
    });
  }

  increasePassengers() {
    const current = this.form.get('passageres')?.value || 1;
    this.form.get('passageres')?.setValue(current + 1);
  }

  decreasePassengers() {
    const current = this.form.get('passageres')?.value || 1;
    if (current > 1) {
      this.form.get('passageres')?.setValue(current - 1);
    }
  }

  submit() {
    if (this.form.valid) {
      const depart = this.form.value.depart;
      const destination = this.form.value.destination;
      const date = this.form.value.dateHeure;

      const dateDepart = new Date(date).toISOString();
      const trimmedDateDepart = dateDepart.slice(0, 19); // Format 'yyyy-MM-ddTHH:mm:ss'

      this.voyageService.rechercherVoyages(depart, destination, trimmedDateDepart).subscribe({
        next: (data) => {
          this.trajets = data;
          this.showResults = true;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des trajets :', err);
          this.showResults = false;
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.showResults = false;
    }
  }
}
