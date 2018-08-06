import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  _pageSize = [];

  @Input()
  set pageSize(v) {
    this._pageSize = new Array(v);
  }
  get pageSize() {
    return this._pageSize;
  }

  @Input() current = 1;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
  }

  next() {
    this.pageChanged.emit(++this.current);
  }

  active(index) {
    let i = index + 1;
    this.current !== i && this.pageChanged.emit(this.current = i);
  }

  previous() {
    this.pageChanged.emit(--this.current);
  }

  get showPrev() {
    return this.current > 1;
  }

  get showNext() {
    return this.current < this.pageSize.length;
  }

}
