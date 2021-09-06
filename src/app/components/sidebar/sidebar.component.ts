import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MoviedataService } from 'src/app/services/moviedata.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Input() sidebarStatus!:boolean;

  constructor(
    private service:MoviedataService,
    private sharedService:SharedService,
    private router:Router
  ) {}

  ngOnInit(): void {
  }
  closeSideBar(){
    this.sidebarStatus = false;
  }
  search(input:string){
    this.sharedService.sendEvent(input);
    this.service.searchMovie(input);
    this.closeSideBar();
    this.router.navigateByUrl('/searchpage');
  }

}

