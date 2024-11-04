import {Component, input} from '@angular/core';
import {Profile} from '../../../shared/interfaces/profile.interface';
import {ImgUrlPipe} from '../../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {

  profile = input<Profile>()

}
