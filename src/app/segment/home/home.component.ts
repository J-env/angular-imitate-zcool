import { Component, Inject, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Subscription, fromEvent } from 'rxjs';

const basePath = '../../../assets/images/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private docScrollSubscription: Subscription;
  fixed = false;

  swiperData = [
    `${basePath}dd01d2.jpg`,
    `${basePath}f065da8.png`,
    `${basePath}a35876493.jpg`,
    `${basePath}a35ee3623.png`,
  ];

  @ViewChild('subnavTab') subnavTab: ElementRef; 

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  ngAfterViewInit() {
    this.onDocScroll();
  }

  onDocScroll() {
    const $win = window;
    const { offsetTop } = this.subnavTab.nativeElement;

    this.docScrollSubscription = fromEvent($win, 'scroll').subscribe(() => {
      const scrollTop = $win.pageYOffset 
            || this.document.documentElement.scrollTop 
            || this.document.body.scrollTop;
            
      this.fixed = scrollTop >= offsetTop ? true : false;
    });
  }

  ngOnDestroy() {
    this.docScrollSubscription && this.docScrollSubscription.unsubscribe();
  }
}
