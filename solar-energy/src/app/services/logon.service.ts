import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../utils/user.model';

@Injectable({
  providedIn: 'root',
})
export class LogonService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }
}
