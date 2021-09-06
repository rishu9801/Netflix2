import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class MoviedataService {
  key = 'd98800f5c7e2d0747e8000a0ea3fb111';
  bannerData = [
   {img: '../../../assets/images/banner_img1.jpg',title:'Avengers Endgame'},
    {img:'../../../assets/images/banner_img2.jpg',title:'Money Heist'},
    {img:'../../../assets/images/banner_img3.jpg',title:'Daredevil'},
    {img:'../../../assets/images/banner_img4.jpg',title:'Sacred Games'},
  ];

  constructor(private http: HttpClient) {}
  getData(title:string) {
    return this.http.get(`
    https://api.themoviedb.org/3/${title}?api_key=${this.key}&language=en-US&page=1}`);
  }

  getMovie(id:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`)
  }
  getTv(id:number){
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.key}&language=en-US`)
  }
  searchMovie(input:string){
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.key}&language=en-US&query=${input}&page=1&include_adult=false`)
  }
  
}
