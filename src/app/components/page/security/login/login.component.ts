import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../../../../shared/services/impl/authentification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  loading: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly authService: AuthentificationService,
    private readonly router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    if (this.authService.IsAuthenticated()) {
      this.router.navigateByUrl('/absence');
    }
  }

  onLogin() {
    if (this.formLogin.invalid) {
      alert('invalid form');

      return;
    }
    this.loading = true;
    const { login, password } = this.formLogin.value;
    this.authService.Login(login, password).subscribe({
      next: (response) => {
        if (response.status === 200) {
          if (response.result.role === 'ADMIN') {
            this.router.navigateByUrl('/absence');
          }else{
            alert('Erreur: Veillez aller dans la plateforme mobile');
          }
          
        } else {
          alert('Login failed: ');
          // console.error('Login failed: ', response.result);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      },
    });
  }
}
