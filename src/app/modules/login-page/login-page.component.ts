import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  authService = inject(AuthService);
  router = inject(Router);
  isPasswordVisible = signal<boolean>(false)

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  onSubmit() {
    if (!this.form.valid) return

    this.authService.login(this.form.value).subscribe(params => {
      this.router.navigate(['']);
    })
  }
}
