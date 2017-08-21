import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import user class
import { User } from '../../classes/user';

import { HttpService } from '../../services/http.service';

@Injectable()
export class AuthenticationService {

  signupURL = environment.API_URL + '/auth/signup';
  loginURL = environment.API_URL + '/auth/login';

  constructor(
    private http: HttpService
  ) { }

  // Register a new user.
  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.signupURL, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  // login user.  returns the json web token for the user.
  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginURL, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
  }

}