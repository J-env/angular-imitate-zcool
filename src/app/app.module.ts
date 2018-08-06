import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './segment/home/home.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({
      exist: true // 用于配置404页面或错误页面时不展示 header和 footer
    }),
    HomeModule, // HomeModule 首屏展示，不应该懒加载
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
