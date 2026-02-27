import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Companhia } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class CompanhiaService {
  private httpClient = inject(HttpClient);

  private apiUrl: string = environment.apiUrl;

  listar(): Observable<Companhia[]> {
    return this.httpClient.get<Companhia[]>(`${this.apiUrl}/companhias`);
  }
}
