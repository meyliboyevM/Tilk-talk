import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, throwError} from 'rxjs';
import {TokenResponse} from './auth.interface';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://icherniakov.ru/yt-course/auth/'
  http = inject(HttpClient)
  cookieService = inject(CookieService)
  router = inject(Router);

  token: string | null = null
  refreshToken: string | null = null

  get isAuth(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token')
      this.refreshToken = this.cookieService.get('refreshToken')
    }

    return !!this.token;
  }

  login(payload: { username: string, password: string }) {
    const fd = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this.http.post<TokenResponse>(`${this.apiUrl}token`, fd)
      .pipe(
        tap(val => this.saveTokens(val)
        )
      )
  }

  refreshAuthToken() {
    return this.http.post<TokenResponse>(`
    ${this.apiUrl}refresh`,
      {
        refresh_token: this.refreshToken
      }
    )
      .pipe(
        tap(val => this.saveTokens(val)),
        catchError(err => {
          this.logout()
          return throwError(err);
        })
      )
  }

  saveTokens(res: TokenResponse) {
    this.token = res.access_token
    this.refreshToken = res.refresh_token

    this.cookieService.set('token', this.token)
    this.cookieService.set('refreshToken', this.refreshToken)
  }

  private logout() {
    this.cookieService.deleteAll()
    this.token = null
    this.refreshToken = null
    this.router.navigate(['login'])
  }
}
