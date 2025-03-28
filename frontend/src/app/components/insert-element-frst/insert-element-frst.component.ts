// insert-element-frst.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insert-element-frst',
  standalone: true,
  imports: [FormsModule, CommonModule], // FormsModule para ngModel
  templateUrl: './insert-element-frst.component.html',
  styleUrl: './insert-element-frst.component.scss'
})
export class InsertElementFrstComponent {
  formData = {
    name: '',
    quantity: 0,
    insertDate: '', // Formato: 'YYYY-MM-DD'
    expirationDate: '',
    unitValue: 0,
    packageValue: 0
  };

  constructor(private http: HttpClient) {} // HttpClient injetado

  onSubmit() {
    this.http.post('/api/insert-first', this.formData)
      .subscribe({
        next: () => alert('Dados salvos com sucesso!'),
        error: (err) => console.error('Erro:', err)
      });
  }
}