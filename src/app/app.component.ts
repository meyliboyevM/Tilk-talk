import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProfileCardComponent} from './common-ui/profile-card/profile-card.component';
import {ProfileService} from './shared/services/profile.service';
import {environment} from '../environments/environments';
import {JsonPipe} from '@angular/common';
import {Profile} from './shared/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService = inject(ProfileService);
  profiles!: Profile[]

  constructor() {
    this.profileService.getTestAccounts()
    .subscribe(response => {
      this.profiles = response
    })
  }

}
