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
  login: any;
  authenticated: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private route: Router) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }

  validateLogon(inputEmail: string, inputPassword: string) {
    this.getUsers().subscribe((resultado) => {
      this.usersList = resultado;
      const email = this.validateEmail(inputEmail);
      const password = this.validatePassword(inputPassword);
      console.log(email, password);
      if (email && password) {
        alert('a');
        this.showMenuEmitter.emit(true);
        this.goToDashboard();
      } else {
        alert('deu ruim');
        this.showMenuEmitter.emit(false);
      }
    });
  }

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

  goToDashboard() {
    localStorage.setItem('login', JSON.stringify('ok'));
    this.route.navigateByUrl('/');
  }

  pageValidation(): boolean {
    let validate = String(localStorage.getItem('login'));
    console.log(validate);
    if (validate == 'ok') {
      this.authenticated = true;
      return true;
    } else {
      this.authenticated = true;
      return false;
    }
  }

  userLogged() {
    return this.authenticated;
  }
}
