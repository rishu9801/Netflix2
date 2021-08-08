import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  bannerData = this.data.bannerData;
  bannerConfig = {
    "slidesToShow":1,
    "slidesToScroll":1,
    "infinite":true,
    "arrows":false,
    "autoplay":true
  }
  

  constructor(private data:MoviedataService) { }

  ngOnInit(): void {
   
  }

}
