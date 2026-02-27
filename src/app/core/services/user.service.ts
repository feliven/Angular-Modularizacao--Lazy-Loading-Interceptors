import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { jwtDecode } from 'node_modules/jwt-decode/build/cjs';
('jwt-decode');
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private tokenService = inject(TokenService);

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor() {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as PessoaUsuaria;
    this.userSubject.next(user);
  }

  retornarUser() {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
