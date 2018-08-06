import { Component, Input, Inject, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  @Input() folders: any[];
  @Output() search = new EventEmitter<any>();
  @Output() panelClose = new EventEmitter<any>();
  @ViewChild('searchInput') searchInput: ElementRef;

  docClickSubscription: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  documentClick() {
    const searchInput = this.searchInput.nativeElement;

    this.docClickSubscription = fromEvent(this.document, 'click').subscribe((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const className = target.className;
      const tagName = target.tagName;

      if (target !== searchInput && ( !className.match(/mat-subheader/i) && tagName !== 'H3' )) {
        this.panelClose.emit(false);
      }
    });
  }

  searchInputFocus() {
    this.searchInput.nativeElement.focus();
  }

  ngOnDestroy() {
    this.docClickSubscription && this.docClickSubscription.unsubscribe();
  }
}
