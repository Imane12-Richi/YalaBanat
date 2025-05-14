import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Importer ActivatedRoute

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

  trajets = [
    // Données de trajets (reste inchangé)
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute // Injection de ActivatedRoute
  ) {
    this.minDateTime = new Date().toISOString().slice(0, 16);

    this.form = this.fb.group({
      depart: ['', Validators.required],
      destination: ['', Validators.required],
      datetime: ['', Validators.required],
      passengers: [1, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    // Récupérer les queryParams dans ngOnInit
    this.route.queryParams.subscribe((params) => {
      if (params['depart']) {
        this.form.patchValue({ depart: params['depart'] });
      }
      if (params['destination']) {
        this.form.patchValue({ destination: params['destination'] });
      }
      if (params['datetime']) {
        this.form.patchValue({ datetime: params['datetime'] });
      }
      if (params['passagers']) {
        this.form.patchValue({ passengers: params['passagers'] });
      }
    });
  }

  increasePassengers() {
    const current = this.form.get('passengers')?.value || 1;
    this.form.get('passengers')?.setValue(current + 1);
  }

  decreasePassengers() {
    const current = this.form.get('passengers')?.value || 1;
    if (current > 1) {
      this.form.get('passengers')?.setValue(current - 1);
    }
  }

  submit() {
    if (this.form.valid) {
      console.log('Recherche validée :', this.form.value);
      this.showResults = true;
    } else {
      this.form.markAllAsTouched();
      this.showResults = false;
    }
  }
}
