import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  classes: any;
  sideBarStatus: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  @HostListener('window:scroll') onScroll(e: Event): void {
   this.navPosition()
  }

  navPosition(){
    if (window.pageYOffset > 100) {
      this.classes = 'nav nav-container';
    } else {
      this.classes = 'nav-container';
    }
  }
  showSidebar() {
    this.sideBarStatus = !this.sideBarStatus;
    if(this.sideBarStatus || window.pageYOffset > 100){
      this.classes = 'nav nav-container';
    }
    else{
      this.classes = 'nav-container';
    }
    return this.sideBarStatus;
  }
}
