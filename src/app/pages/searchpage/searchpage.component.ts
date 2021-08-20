import { Component, OnInit } from '@angular/core';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchResults:any;
  userInput!:string;
  selected!:string;

  constructor(private service:MoviedataService) { }

  ngOnInit(): void {
  }
  search(){
    this.service.searchMovie(this.userInput).subscribe(res => this.searchResults = res)
  }
    

}
