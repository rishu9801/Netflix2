import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() results!:any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.results,'this card');s
  }
  goToDetails(data:any){
    console.log(data,'check');
    this.router.navigate([`${data.id}`,{type:`${data.media_type}`}], {relativeTo: this.route},);
  }

}
