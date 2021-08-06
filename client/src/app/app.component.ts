import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { forkJoin } from 'rxjs';
import { CommentService } from './comment.service';
import { initializeKeycloak } from './init/keycloak-init.factory';
import { PostService } from './post.service';
import { OAuthService } from 'angular-oauth2-oidc'

type Idata = {
  status: number
  success: boolean
  data: []
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  comments:any
  posts:any

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private commentService: CommentService,
    private postService: PostService,
    private oauthService: OAuthService) {
  }

  async ngOnInit() {

    Promise.all([
      this.getPosts(),
      this.getComments()
    ])
    .catch((err) => {
      console.error(err)
    })
    
  }

  title = 'client';

  logout() {
    // this.keycloakService.logout()
    this.oauthService.logOut()
  }

  getComments() {
    this.commentService.getComments()
      .subscribe(comments => {
        const Icomments = <Idata>comments
        this.comments = [...Icomments.data]
      })
  }

  getPosts() {
    this.postService.getPosts()
    .subscribe(posts => {
      const Iposts = <Idata>posts
      this.posts = [...Iposts.data]
    })
  }
}
