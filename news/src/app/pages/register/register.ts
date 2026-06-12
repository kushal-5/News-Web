import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const p = group.get('password')?.value;
  const c = group.get('confirmPassword')?.value;
  return p && c && p !== c ? { mismatch: true } : null;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        country: [''],
        phone: [''],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      { validators: passwordMatchValidator }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    const payload = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      country: this.registerForm.value.country,
      phone: this.registerForm.value.phone,
    };

    this.authService.register(payload).subscribe({
      next: (res: any) => {
        console.log('Register success:', res);
        alert('Account created successfully');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error?.msg || 'Registration failed');
      }
    });
  }

  signUpWithGoogle() {
    console.log('Google signup clicked');
  }

  signUpWithFacebook() {
    console.log('Facebook signup clicked');
  }
}