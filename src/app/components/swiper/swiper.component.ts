import { Component, OnInit, Input } from '@angular/core';

import { SwiperService, swiperAnimate } from './swiper.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  providers: [
    SwiperService
  ],
  animations: [
    swiperAnimate
  ]
})
export class SwiperComponent implements OnInit {
  @Input() data: any[];
  @Input() type = 1;

  constructor(public swiperSrv: SwiperService) { }
  
  ngOnInit() {
    this.swiperSrv.data = this.data;
  }
}
