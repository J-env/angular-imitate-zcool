import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showCoo = false;

  folders = [
    {
      title: '热门搜索',
      items: ['LOGO', '海报', '插画', '列表页面', '画册']
    }
  ];

  @ViewChild(SearchComponent) private searchCoo: SearchComponent;

  constructor() { }

  ngOnInit() {
  }
  
  showSearch() {
    this.showCoo = true;

    setTimeout(() => {
      this.searchCoo.searchInputFocus();
      this.searchCoo.documentClick();
    });
  }

  panelClose(e) {
    this.showCoo = e;
  }

  onSearch(e) {
    console.log(e);
  }
}
