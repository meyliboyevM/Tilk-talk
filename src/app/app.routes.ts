import { Routes } from '@angular/router';
import {SearchPageComponent} from './modules/search-page/search-page.component';
import {LoginPageComponent} from './modules/login-page/login-page.component';
import {ProfilePageComponent} from './modules/profile-page/profile-page.component';
import {LayoutComponent} from './common-ui/layout/layout.component';
import {canActivateAuth} from './auth/access.guard';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: SearchPageComponent},
      {path: 'profile', component: ProfilePageComponent},
    ],
    canActivate: [canActivateAuth]
  },
  {path: 'login', component: LoginPageComponent},
];
