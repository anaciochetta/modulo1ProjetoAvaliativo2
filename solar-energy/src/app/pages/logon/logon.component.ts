import { Component, OnInit } from '@angular/core';
import { LogonService } from 'src/app/services/logon.service';
import { IUser } from 'src/app/utils/model/user.model';

@Component({
  selector: 'solar-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  inputUser: IUser = { email: '', password: '' };
  usersList: IUser[] = [];
  login: any;

  constructor(private logonService: LogonService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.validateLogon(this.inputUser.email, this.inputUser.password);
  }

  validateLogon(inputEmail: string, inputPassword: string) {
    this.logonService.getUsers().subscribe((resultado) => {
      this.usersList = resultado;
      const email = this.validateEmail(inputEmail);
      const password = this.validatePassword(inputPassword);
      console.log(email, password);
      if (email && password) {
        localStorage.setItem('login', JSON.stringify('ok'));
        this.logonService.goToDashboard();
      } else {
        alert('deu ruim');
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
}
