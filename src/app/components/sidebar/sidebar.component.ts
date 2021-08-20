import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarStatus!:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  closeSidebar(){
    this.sidebarStatus = false;
  }

}

