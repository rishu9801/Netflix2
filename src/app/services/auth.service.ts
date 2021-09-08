import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../appModels/user.model';

export interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'AIzaSyBMzIpurPUzu5BVMPu5rv1xCodbFlUVuxw';
  user = new Subject<User>();
  isLoggedIn = false;

  constructor(private http: HttpClient,private router:Router) {}

  signUp(email: string, pass: string) {
    return this.http
      .post<authResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
        {
          email: email,
          password: pass,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((res: any) => {
          this.authenticatedUser(
            res.email,
            res.localId,
            res.idToken,
            +res.expiresIn
          );
        })
      );
  }
  signIn(email: string, pass: string) {
    return this.http
      .post<authResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        {
          email: email,
          password: pass,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((res: any) => {
          this.authenticatedUser(
            res.email,
            res.localId,
            res.idToken,
            +res.expiresIn
          );
          this.isLoggedIn = true;
        })
      );
  }
  private authenticatedUser(
    email: string,
    userId: string,
    token: string,
    expirationIn: any
  ) {
    const expirationDate = new Date(new Date().getTime() + expirationIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    console.log('user:', user);
    this.user.next(user);
  }

  googleSignIn(idToken: string) {
    return this.http.post<any>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${this.apiKey}`,
      {
        postBody: `id_token=${idToken}&providerId=google.com`,
        requestUri: 'http://localhost:4200',
        returnIdpCredential: true,
        returnSecureToken: true,
      }
    ).pipe(
      tap((res) => {
        this.authenticatedUser(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        );
        this.isLoggedIn = true;
      })
    );
  }

  signOut(){
    this.isLoggedIn = false;
    this.router.navigate([''])
  }
}
