import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FigureComponent } from '../components/figure/figure.component';
import { SwiperComponent } from '../components/swiper/swiper.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SearchComponent } from '../components/search/search.component';
import { AuthorCardComponent } from '../components/author-card/author-card.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';

const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
];

const components = [
  FigureComponent,
  SwiperComponent,
  MenuComponent,
  SearchComponent,
  AuthorCardComponent,
  PaginatorComponent,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
