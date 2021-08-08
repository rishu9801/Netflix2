import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  categories = [
    { url: 'movie/popular', title: 'Popular movies' },
    { url: 'movie/now_playing', title: 'Now Playing' },
    { url: 'tv/popular', title: 'Popular TV Shows' },
    { url: 'tv/top_rated', title: 'Top Rated TV Shows' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
