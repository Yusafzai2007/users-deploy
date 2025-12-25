import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  studentform = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  submitForm(data: any) {
    console.log('Login Data:', data);

    this.http
      .post('http://localhost:4000/api/v1/ecommerce/login', data)
      .subscribe({
        next: (res: any) => {
          console.log('Login Success:', res);

          // ✅ Example: token store (optional)
          // localStorage.setItem('token', res.token);

          this.router.navigateByUrl('/user');
        },
        error: (err) => {
          console.error('Login Error:', err);
        },
      });
  }
}
