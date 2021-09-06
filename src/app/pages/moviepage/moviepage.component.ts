import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit {

  category ={ url: 'movie/popular', title: 'Popular movies',type:'movie'}
  constructor() { }

  ngOnInit(): void {
  }

}
