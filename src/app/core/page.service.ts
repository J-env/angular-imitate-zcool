import { Injectable, Optional } from '@angular/core';

export class PageServiceConfig {
  exist = true;
}

@Injectable({
  providedIn: 'root'
})
export class PageService {
  _exist = true;

  constructor(@Optional() config: PageServiceConfig) {
    if ( config ) {
      this._exist = config.exist;
    }
  }

  get exist() {
    return this._exist;
  }

  set exist(ex) {
    this._exist = ex;
  }
}
