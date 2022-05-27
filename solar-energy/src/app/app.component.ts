import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'solar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'solar-energy';

  showMenu: boolean = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    //verifica se está logado para mostrar o menu/side-bar
    this.authService.showMenuEmitter.subscribe((show) => {
      this.showMenu = show;
    });
  }
}
