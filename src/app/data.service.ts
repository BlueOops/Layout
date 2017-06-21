import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  loadMenu(): Observable<Response> {
    return this.http.get('/websiteapi_back/login');
  }

  loginApi(): Observable<Response> {
    return this.http.get('/websiteapi_back/login');
  }

  postServices(post: { uid: string, pwd: string }): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('/websiteapi_back/login', post, { headers })
      .map(res => res);
  }

  getTodo() {
    return this.http.get('/websiteapi_back/login');
  }
}
