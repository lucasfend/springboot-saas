import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-element-scnd',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './insert-element-scnd.component.html',
  styleUrl: './insert-element-scnd.component.scss'
})
export class InsertElementScndComponent {
  formData = {
    name: '',
    quantity: 0,
    value: 0,
    expirationDate: '',
  };

  constructor(private http: HttpClient) {} // HttpClient injetado

  onSubmit() {
    this.http.post('/api/insert-second', this.formData)
      .subscribe({
        next: () => alert('Dados salvos com sucesso!'),
        error: (err) => console.error('Erro:', err)
      });
  }
}
