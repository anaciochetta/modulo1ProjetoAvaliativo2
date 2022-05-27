import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../utils/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  usersList: IUser[] = [];
  authenticated: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private route: Router) {}

  //busca a lista de usuários cadastrados
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }

  //valida o login do usuário e emite a liberação das páginas
  validateLogin(inputEmail: string, inputPassword: string) {
    this.getUsers().subscribe((resultado) => {
      this.usersList = resultado;

      const email = this.validateEmail(inputEmail);
      const password = this.validatePassword(inputPassword);

      if (email && password) {
        localStorage.setItem('login', JSON.stringify('ok'));
        this.showMenuEmitter.emit(true);
        this.authenticated = true;
        this.route.navigateByUrl('/');
      } else {
        alert('deu ruim');
        this.authenticated = false;
        this.showMenuEmitter.emit(false);
      }
    });
  }

  //valida o email baseado na lista de usuários
  validateEmail(email: string) {
    const found = this.usersList.find((user) => {
      return user.email === email;
    });

    if (found === undefined) {
      return false;
    } else {
      return true;
    }
  }

  //valida a senha baseado na lista de usuários
  validatePassword(password: string): boolean {
    let found = this.usersList.find((user) => {
      return user.password === password;
    });

    if (found === undefined) {
      return false;
    } else {
      return true;
    }
  }

  //retorna o estado da autenticação
  pageValidation(): boolean {
    return this.authenticated;
  }
}
