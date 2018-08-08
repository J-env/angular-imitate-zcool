import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  pageArray = [];
  private _pageIndex = 1;
  
  @Input() pageCount: number;
  @Output() pageIndexChange = new EventEmitter<number>();
  @ViewChild('renderTemplate') private _renderTempl: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>;

  @Input()
  set renderTempl(value: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>) {
    this._renderTempl = value;
  }
  get renderTempl(): TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }> {
    return this._renderTempl;
  }

  @Input()
  set pageIndex(value) {
    if (this._pageIndex !== value) {
      this._pageIndex = value > this.pageCount ? this.pageCount : value < 1 ? 1 : +value;
      this.buildPageArray();
    }
  }
  get pageIndex() {
    return this._pageIndex;
  }

  get isLast() {
    return this.pageIndex === this.pageCount;
  }
  get isFirst() {
    return this.pageIndex === 1;
  }

  get showPrevDots() {
    return this.pageCount > 9 && this.pageIndex - 3 > 1;
  }
  get showNextDots() {
    return this.pageCount > 9 && this.pageIndex + 3 < this.pageCount;
  }

  constructor() { }

  ngOnInit() {
    if (this.pageCount && this.pageIndex === 1) {
      this.buildPageArray();
    }
  }

  buildPageArray() {
    let tmpPageArray = [];

    if (this.pageCount <= 9) {
      for (let i = 2; i <= this.pageCount - 1; i++) {
        tmpPageArray.push({ index: i });
      }
    }else {
      const current = +this.pageIndex;
      console.log(current);
      let left = Math.max(2, current - 2);
      let right = Math.min(current + 2, this.pageCount - 1);
      
      if (current - 1 <= 2) {
        right = 5;
      }
      
      if (this.pageCount - current <= 2) {
        left = this.pageCount - 4;
      }
      
      for (let i = left; i <= right; i++) {
        tmpPageArray.push({ index: i });
      }
      console.log(tmpPageArray);
    }
    

    this.pageArray = tmpPageArray;
  }

  next() {
    this.pageIndex < this.pageCount && this.pageIndexChange.emit(++this.pageIndex);
  }
  
  prev() {
    this.pageIndex > 1 && this.pageIndexChange.emit(--this.pageIndex);
  }

  pageClick(index) {
    if (this.pageIndex !== index) {
      this.pageIndexChange.emit(this.pageIndex = index);
    }
  }
}
