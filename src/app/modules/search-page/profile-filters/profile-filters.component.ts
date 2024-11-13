import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {ProfileService} from '../../../shared/services/profile.service';
import {debounceTime, startWith, switchMap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
  private fb = inject(FormBuilder)
  profileService = inject(ProfileService);

  form = this.fb.group({
    firstName: '',
    lastName: '',
    stack: ''
  })

  constructor() {
    this.form.valueChanges
      .pipe(
        startWith({}),
        debounceTime(300),
        switchMap((value) => {
          return this.profileService.filterProfiles(value)
        }),takeUntilDestroyed()
      )
      .subscribe()
  }

}
