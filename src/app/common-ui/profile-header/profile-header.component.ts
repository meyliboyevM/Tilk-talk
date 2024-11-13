import {Component, input} from '@angular/core';
import {Profile} from '../../shared/interfaces/profile.interface';
import {ImgUrlPipe} from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<Profile>()
}
