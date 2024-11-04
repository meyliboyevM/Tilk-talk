import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../interfaces/profile.interface';
import {Pagable} from '../interfaces/pagable.interface';
import {map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  apiUrl = 'https://icherniakov.ru/yt-course/'

  me = signal<Profile | null>(null)

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.apiUrl}account/test_accounts`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.apiUrl}account/me`)
      .pipe(
        tap(response => this.me.set(response)),
      )
  }

  getAccounts(id: string) {
    return this.http.get<Profile>(`${this.apiUrl}account/${id}`)
  }

  getSubscribersShortList() {
    return this.http.get<Pagable<Profile>>(`${this.apiUrl}account/subscribers/`)
      .pipe(
        map(result => result.items.slice(0,3)),
      )
  }

  patchProfile(profile: Profile) {
    return this.http.patch(`${this.apiUrl}account/me`, profile)
  }
}
