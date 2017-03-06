import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    login(username: string, password: string) {

      let headers = new Headers();
      var basicKey = username+":"+password;
      headers.append('Authorization', 'Basic ' +  btoa(basicKey));
      let options = new RequestOptions({ headers: headers });


      // return this.http.get("http://ip/yourpost", headers});

        return this.http.post(this.config.apiUrl + '/api/entities/authenticate', {username}, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let auth = response.json();
                if (auth && auth.Token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(auth));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
