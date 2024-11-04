import {Component, inject} from '@angular/core';
import {ProfileCardComponent} from '../../common-ui/profile-card/profile-card.component';
import {ProfileService} from '../../shared/services/profile.service';
import {Profile} from '../../shared/interfaces/profile.interface';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    ProfileCardComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  profileService = inject(ProfileService);
  profiles!: Profile[]

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(response => {
        this.profiles = response
      })
  }

}
