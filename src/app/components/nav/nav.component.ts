import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  classes: any;
  sidebarStatus:boolean = false;
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll') onScroll(e: Event): void {
    if (window.pageYOffset > 100) {
      this.classes = 'nav nav-container';
    } else {
      this.classes = 'nav-container';
    }
  }
  showSidebar(){
    this.sidebarStatus = !this.sidebarStatus;
    console.log(this.sidebarStatus);
    return this.sidebarStatus;
  }
}
