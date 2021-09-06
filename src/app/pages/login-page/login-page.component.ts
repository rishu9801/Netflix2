import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  Form!:FormGroup;
  loggedIn = false;

  constructor(private fb:FormBuilder,private _authService:AuthService,private router:Router,private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  onSubmit(){
    if(this.Form.valid){
      console.log(this.Form.value)
    const email  = this.Form.value.email;
    const password = this.Form.value.password;
      this._authService.signIn(email,password).subscribe(res => {console.log(res),this.router.navigate(['homepage-component'])})
    }
    else{
      alert('wrong input');
    }
  }
  signIn(){
    if(this.Form.valid){
      console.log(this.Form.value)
    const email  = this.Form.value.email;
    const password = this.Form.value.password;
      this._authService.signIn(email,password).subscribe(res => {console.log(res)})
    }
    else{
      alert('wrong input');
    }
  }
  googleSignIn(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      res => this._authService.googleSignIn(res.idToken).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['homepage-component'])
        },
        (err) => {
          console.log(err);
        }
        
        )

    )
  }
}
