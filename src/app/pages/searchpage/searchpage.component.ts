import { Component, OnInit } from '@angular/core';
import { MoviedataService } from 'src/app/services/moviedata.service';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
})
export class SearchpageComponent implements OnInit {
  searchResults: any;
  userInput!: string;
  selected!: string;
  searchSubscription!:Subscription;

  constructor(
    private service: MoviedataService,
    private sharedService: SharedService
  ) {
    this.searchSubscription = this.sharedService.getEvent().subscribe((res) => {
      this.getData();
    })
  }

  ngOnInit(): void {
    this.getData();
  }
  // search() {
  //   this.service.searchMovie(this.userInput).subscribe((res) => {
  //     (this.searchResults = res), console.log(res);
  //   });
  // }

  getData(){
    this.service.searchMovie(this.sharedService.userInput)
    .subscribe(res => {this.searchResults = res,console.log(res)});
  }
    
}
