import {Component, inject, Input, OnInit} from '@angular/core';
import {ProfileService} from '../../../shared/services/profile.service';
import {ImgUrlPipe} from '../../../shared/pipes/img-url.pipe';
import {AsyncPipe} from '@angular/common';
import {getDate} from '../../../shared/utils/get-date';
import {SvgIconComponent} from '../../../common-ui/svg-icon/svg-icon.component';
import {CommentComponent} from './comment/comment.component';
import {PostInputComponent} from '../post-input/post-input.component';
import {PostService} from '../../../shared/services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ImgUrlPipe,
    AsyncPipe,
    SvgIconComponent,
    CommentComponent,
    PostInputComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post: any;
  profileService = inject(ProfileService);
  postService = inject(PostService);
  profile = this.profileService.me



  protected readonly getDate = getDate;

  viewPost(id: any) {
    console.log('asdas')
    this.postService.deletePost(id).subscribe()
  }
}
