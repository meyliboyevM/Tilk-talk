import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ProfileService} from '../../shared/services/profile.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  profileService = inject(ProfileService);

  ngOnInit() {
    this.profileService.getMe().subscribe(response => {
      console.log(response);
    })
  }

}
