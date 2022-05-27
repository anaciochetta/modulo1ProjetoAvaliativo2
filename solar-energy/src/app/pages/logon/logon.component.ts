import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUser } from 'src/app/utils/model/user.model';

@Component({
  selector: 'solar-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  inputUser: IUser = { email: '', password: '' };

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  //quando clicar no botão de entrar chama o serviço de login
  onSubmit() {
    this.authService.validateLogin(
      this.inputUser.email,
      this.inputUser.password
    );
  }
}
