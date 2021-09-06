import { Component, Input, OnInit } from '@angular/core';
import { MoviedataService } from 'src/app/services/moviedata.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() categories:any
  sliderConfig = {
    slidesToShow: 8,
    slidesToScroll: 4,
    infinite: true,
    autoplaySpeed: 5000,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          swipeToSlide:true,
        },
      },
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          swipeToSlide:true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          swipeToSlide:true,
          arrows:false
        },
      },
      {
        breakpoint: 664,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          swipeToSlide:true,
          arrows:false
        },
      },
      {
        breakpoint: 455,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide:true,
          arrows:false
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide:true,
          arrows:false
        },
      }
    ],
  };
  movies: any;
  constructor(private movieData: MoviedataService,
    private router:Router,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.movieData.getData(this.categories.url).subscribe((d: any) => {
      this.movies = [...d.results];
      console.log(this.movies);
    });
  }
  goToDetails(data:any){
    console.log(data,'check');
    this.router.navigate([`${data.id}`,{type:`${this.categories.type}`}], {relativeTo: this.route},);
    console.log('routing is working',this.route);
  }
}
