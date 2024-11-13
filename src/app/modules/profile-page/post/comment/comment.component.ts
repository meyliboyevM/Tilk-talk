import {Component, Input} from '@angular/core';
import {getDate} from "../../../../shared/utils/get-date";
import {ImgUrlPipe} from '../../../../shared/pipes/img-url.pipe';
import {PostInputComponent} from '../../post-input/post-input.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    ImgUrlPipe,
    PostInputComponent
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  @Input() comment: any;

    protected readonly getDate = getDate;
}
