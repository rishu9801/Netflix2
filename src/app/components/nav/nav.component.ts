import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MoviedataService } from 'src/app/services/moviedata.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  classes: any;
  sideBarStatus = this.sharedService.sidebarStatus;
  searchBarStatus = false;
  accountStatus = false;
  constructor(private sharedService: SharedService,private service: MoviedataService,private router:Router ,private authService:AuthService) {}
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
  search(input:string){
    this.sharedService.sendEvent(input);
    this.service.searchMovie(input);
    console.log(input);
    this.router.navigateByUrl('/searchpage');
  }

  searchBarToggle(){
    // window.addEventListener('click',() => {this.searchBarStatus = false})
    this.searchBarStatus = !this.searchBarStatus ;
    if(this.searchBarStatus){
      this.classes = 'nav nav-container';
    }
    else{
      this.classes = 'nav-container';
    }
  }
  signOut(){
    this.authService.signOut();
  }
}
