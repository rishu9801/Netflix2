import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Form!: FormGroup;

  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  goToLogin(){
    this.router.navigate(['login'])
  }
}
