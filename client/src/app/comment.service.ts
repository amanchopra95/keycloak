import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl = "/comments"

  constructor(private httpClient: HttpClient) { }

  getComments () {
    return this.httpClient.get(this.apiUrl)
  }
}
