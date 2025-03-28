import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firstinsert } from '../interfaces/firstinsert'

@Injectable({
  providedIn: 'root'
})

export class StockFirstService {
  private apiUrl = 'api/stock-first';

  constructor(private http: HttpClient) { }

  getFirstStock(): Observable<Firstinsert[]> { //metodo get
    return this.http.get<Firstinsert[]>(this.apiUrl);
  }

  deleteItemFirst(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}