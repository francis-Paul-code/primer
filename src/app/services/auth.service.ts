import { Injectable } from '@angular/core';
import { flatMap, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';


const options = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  register(form: FormData): Observable<any> {
    return this.http.post<FormData>(
      environment.apiURL + '/user/signup',
      form,
      options
    );
  }
  login(form: FormData) {
    return this.http
      .post<FormData>(environment.apiURL + '/user/login', form, options)
      .pipe(flatMap(async (result) => this.setSession(result)));
  }
  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(authResult.expires));
  }
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
}
