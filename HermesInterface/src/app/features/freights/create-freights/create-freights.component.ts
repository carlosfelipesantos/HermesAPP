import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-freights.component.html',
  styleUrls: ['./create-freights.component.css'],
})
export class CreateFreightsComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    originAddress: ['', Validators.required],
    originCity: ['', Validators.required],
    originUf: ['', Validators.required],

    destAddress: ['', Validators.required],
    destCity: ['', Validators.required],
    destUf: ['', Validators.required],

    weightKg: [null, Validators.required],
    price: [null, Validators.required],
    cargoDesc: ['', Validators.required],
  });

  submit() {
    if (this.form.invalid) return;

    console.log('FRETE CRIADO (mock):', this.form.value);

    this.router.navigate(['/freights']); 
  }
}