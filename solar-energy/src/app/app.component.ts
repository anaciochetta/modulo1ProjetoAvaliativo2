import { Component } from '@angular/core';

@Component({
  selector: 'solar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'solar-energy';

  validate = String(localStorage.getItem('login'));
}
