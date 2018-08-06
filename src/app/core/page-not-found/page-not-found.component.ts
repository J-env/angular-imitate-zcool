import { Component, OnDestroy } from '@angular/core';

import { PageService } from '../page.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnDestroy {

  constructor(private pageService: PageService) {
    this.pageService.exist = false;
  }

  ngOnDestroy() {
    this.pageService.exist = true;
  }
}
