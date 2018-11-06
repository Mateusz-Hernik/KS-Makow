import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class UserService {
 
  constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) { }

  public loginUser(user: User) {
    var body = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });

    let promise = new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + 'user/login', body, requestOptions)
        .toPromise()
        .then(
          res => {
            resolve(res.text() == 'true');
          },
          msg => {
            reject(false)
          }
        );
    });

    return promise;
  }
}
