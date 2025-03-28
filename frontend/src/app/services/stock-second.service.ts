import { Injectable } from '@angular/core';
import { Secondinsert } from '../interfaces/secondinsert';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class StockSecondService {
  private apiUrl = 'api/stock-second';

  constructor(private http: HttpClient) { }

  getScndStock(): Observable<Secondinsert[]> {
    return this.http.get<Secondinsert[]>(this.apiUrl);
  }

  deleteItemScnd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}