import { Component, OnInit } from '@angular/core';

import { PageService } from './core/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public pageService: PageService) { }

}
