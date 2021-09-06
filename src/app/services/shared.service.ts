import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();
  userInput!:string;
  sidebarStatus = false;
  myList:any

  sendEvent(input:string){
    this.userInput = input;
    this.subject.next();
  }
  getEvent():Observable<any>{
    return this.subject.asObservable();
  }

  constructor() { }
}
