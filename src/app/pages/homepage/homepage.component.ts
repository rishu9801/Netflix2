import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  movies = [
    { url: 'movie/popular', title: 'Popular movies', type: 'movie' },
    { url: 'movie/now_playing', title: 'Now Playing', type: 'movie' },
  ];
  tv = [
    { url: 'tv/popular', title: 'Popular TV Shows', type: 'tv' },
    { url: 'tv/top_rated', title: 'Top Rated TV Shows', type: 'tv' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
