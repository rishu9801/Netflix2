import { Component, OnInit } from '@angular/core';
import { MoviedataService } from 'src/app/services/moviedata.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-mylistpage',
  templateUrl: './mylistpage.component.html',
  styleUrls: ['./mylistpage.component.css']
})
export class MylistpageComponent implements OnInit {
  listResults:Array<object> = []
  results:any;
  constructor(private sharedService:SharedService,private service:MoviedataService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.sharedService.myList.length; i++) {
      const element = this.sharedService.myList[i];
      this.service.searchMovie(element).subscribe(res => {this.listResults.push(res),console.log(this.listResults)})
    }
    this.results =this.listResults;
  }

}
