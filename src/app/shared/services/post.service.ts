import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient);
  apiUrl = 'https://icherniakov.ru/yt-course/'

  getPosts() {
    return this.http.get(`${this.apiUrl}post/`)
  }

  createPost(post: any) {
    return this.http.post(`${this.apiUrl}post/`, post)
  }
  deletePost(id: string) {
    return this.http.delete(`${this.apiUrl}post/${id}`)
  }

}
