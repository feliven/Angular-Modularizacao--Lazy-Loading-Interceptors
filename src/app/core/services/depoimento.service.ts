import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  private http = inject(HttpClient);

  private apiUrl: string = environment.apiUrl;

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
