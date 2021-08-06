import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "/posts"

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.apiUrl)
  }
}
