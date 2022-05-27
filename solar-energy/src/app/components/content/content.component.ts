import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'solar-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  routeData: any;
  title: string = '';
  editPage: string = 'Editar Unidade';

  constructor() {}

  ngOnInit(): void {}
}
