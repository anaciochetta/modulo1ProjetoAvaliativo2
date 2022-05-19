import { Component, OnInit } from '@angular/core';
import { LogonService } from 'src/app/services/logon.service';
import { IUser } from 'src/app/utils/user.model';

@Component({
  selector: 'solar-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  usersList: IUser[] = [];

  constructor(private logonService: LogonService) {}

  ngOnInit(): void {}

  getUsersList(): void {
    this.logonService.getUsers().subscribe((resultado) => {
      this.usersList = resultado;
    });
    console.log(this.usersList);
  }
}
