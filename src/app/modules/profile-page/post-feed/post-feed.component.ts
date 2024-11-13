import {Component, inject} from '@angular/core';
import {PostInputComponent} from '../post-input/post-input.component';
import {PostComponent} from '../post/post.component';
import {ProfileService} from '../../../shared/services/profile.service';
import {PostService} from '../../../shared/services/post.service';

@Component({
  selector: 'app-post-feed',
  standalone: true,
  imports: [
    PostInputComponent,
    PostComponent
  ],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {
  postService = inject(PostService);
  posts: any

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

}
