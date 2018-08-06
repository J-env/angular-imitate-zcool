import { Injectable } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const swiperAnimate: AnimationTriggerMetadata = trigger('swiper', [
  // 不显示
  state('off', style({
    display: 'none',
    zIndex: 0,
    // left: 0,
    transform: 'translateX(0)'
  })),
  state('prev', style({
    zIndex: 1,
    // left: '-100%',
    transform: 'translateX(-100%)'
  })),
  state('next', style({
    zIndex: 2,
    // left: '100%',
    transform: 'translateX(100%)'
  })),
  // 当前图片
  state('on', style({
    zIndex: 3,
    // left: 0,
    transform: 'translateX(0)'
  })),
  transition('prev <=> on', [
    animate('0.3s ease-in-out')
  ]),
  transition('next <=> on', [
    animate('0.3s ease-in-out')
  ]),
]);

@Injectable({
  providedIn: 'root'
})
export class SwiperService {
  data: any[];
  current = 0;
  timer = null;

  constructor() { }

  swiperState(index) {
    if (this.data && this.data.length) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.next(), 3000);

      if (this.current === 0) {
        return index === 0 ? 'on' : index === 1 
        ? 'next' : index === this.data.length - 1 
        ? 'prev' : 'off';
      }else if (this.current === this.data.length - 1) {
        return index === this.data.length - 1 ? 'on' : index === this.data.length - 2 
        ? 'prev' : index === 0 ? 'next' : 'off';
      }
      
      switch(index - this.current) {
        case 0:
          return 'on';
        case 1:
          return 'next';
        case -1:
          return 'prev';
        default:
          return 'off';
      }
    }else {
      return 'off';
    }
  }

  next() {
    this.current = (this.current + 1) % this.data.length;
  }

  prev() {
    this.current = this.current - 1 < 0 ? this.data.length - 1 : this.current - 1;
  }

  touch(e) {
    if (e === 'left') {
      this.next();
    }else if (e === 'right') {
      this.prev();
    }
  }
}
