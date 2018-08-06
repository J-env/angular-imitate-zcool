import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageService, PageServiceConfig } from './page.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  providers: [
    PageService
  ],
  exports: [
    BrowserAnimationsModule,
    
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule {
  
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      // CoreModule只能在 AppModule中导入
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: PageServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: PageServiceConfig, useValue: config }
      ]
    };
  }
}
