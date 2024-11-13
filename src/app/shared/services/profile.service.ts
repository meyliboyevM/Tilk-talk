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
  filteredProfiles = signal<Profile[]>([])

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.apiUrl}account/test_accounts`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.apiUrl}account/me`)
      .pipe(
        tap(response => this.me.set(response)),
      )
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.apiUrl}account/${id}`)
  }

  getSubscribersShortList(subsAmount = 3) {
    return this.http.get<Pagable<Profile>>(`${this.apiUrl}account/subscribers/`)
      .pipe(
        map(result => result.items.slice(0,subsAmount)),
      )
  }

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>(`${this.apiUrl}account/me`, profile)
  }

  uploadAvatar(file: File) {
    const fd = new FormData();
    fd.append('image', file)
    return this.http.post<Profile>(`${this.apiUrl}account/upload_image/`, fd)
  }

  filterProfiles(params: Record<string, any>) {
    return this.http.get<Pagable<Profile>>(
      `${this.apiUrl}account/accounts`,
      {params},
    )
      .pipe(
        tap(response => this.filteredProfiles.set(response.items)),
      )
  }
}
