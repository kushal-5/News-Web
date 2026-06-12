import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  email = '';
  password = '';

  constructor(private authService: AuthService,  private router: Router
) {}

  onLogin() {

    const payload = {
      email: this.email,
      password: this.password
    };

    this.authService.login(payload).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        alert('Login successful');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error?.msg || 'Login failed');
      }
    });
  }

  signInWithGoogle() {
    console.log('Google login clicked');
  }

  signInWithFacebook() {
    console.log('Facebook login clicked');
  }
}