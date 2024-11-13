import {Component, inject, Input} from '@angular/core';
import {ProfileService} from '../../../shared/services/profile.service';
import {ImgUrlPipe} from '../../../shared/pipes/img-url.pipe';
import {SvgIconComponent} from '../../../common-ui/svg-icon/svg-icon.component';
import {SmilesComponent} from '../../../shared/components/smiles/smiles.component';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {PostService} from '../../../shared/services/post.service';

@Component({
  selector: 'app-post-input',
  standalone: true,
  imports: [
    ImgUrlPipe,
    SvgIconComponent,
    SmilesComponent,
    ReactiveFormsModule
  ],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent {
  @Input() border: boolean = false;
  profileService = inject(ProfileService);
  postService = inject(PostService);
  profile = this.profileService.me

  fb = inject(FormBuilder)

  form = this.fb.group({
    title: ['', [Validators.required]],
    // content: ['', [Validators.required]],
    author: this.profile()?.id,
    // communityId: ['', Validators.required],
  })



  onSubmit() {
    this.postService.createPost(this.form.value).subscribe(par => {
      console.log(par)
    })
  }
}
