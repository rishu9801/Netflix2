import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  id!:number;
  movie:any;

  constructor(private route:ActivatedRoute,private service:MoviedataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => this.id = Number(result.id));
    this.service.getMovie(this.id).subscribe(m => {this.movie = m,console.log(this.movie)})
  }
    

}
