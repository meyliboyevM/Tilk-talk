import {Component, inject} from '@angular/core';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {AsyncPipe, JsonPipe, NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SubscriberCardComponent} from './subscriber-card/subscriber-card.component';
import {ProfileService} from '../../shared/services/profile.service';
import {firstValueFrom, Observable} from 'rxjs';
import {Profile} from '../../shared/interfaces/profile.interface';
import {ImgUrlPipe} from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    SubscriberCardComponent,
    AsyncPipe,
    JsonPipe,
    ImgUrlPipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  profileService = inject(ProfileService);
  subscribers$ = this.profileService.getSubscribersShortList()

  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: ''
    },
    {
      label: 'Чаты',
      icon: 'message',
      link: '/chats'
    },
    {
      label: 'Поиск',
      icon: 'magnifier',
      link: '/search'
    }
  ]

}
