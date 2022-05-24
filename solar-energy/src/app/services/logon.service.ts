import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../utils/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LogonService {
  constructor(private http: HttpClient, private route: Router) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }

  goToDashboard() {
    this.route.navigateByUrl('/dashboard');
  }
}
