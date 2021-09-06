import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviedataService } from 'src/app/services/moviedata.service';
import { Location } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit {
  id!: number;
  movie: any;
  show: any;
  type: any;
  list:Array<string> = []

  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private service: MoviedataService,
    private sharedService:SharedService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((result) => (this.id = Number(result.id)));
    this.type = this.route.snapshot.paramMap.get('type');
    if (this.type === 'movie') {
      this.service.getMovie(this.id).subscribe((m) => {
        (this.movie = m), console.log(this.movie);
      });
    } else {
      this.service.getTv(this.id).subscribe((m) => {
        (this.show = m), console.log(this.show);
        console.log('this.is tv');
      });
    }
  }
  goBack(){
    this.location.back();
  }
  addToList(title:string){
    // this.list.push(id);
    this.sharedService.myList.push(title)
    console.log(this.sharedService.myList);
  }
    
}
