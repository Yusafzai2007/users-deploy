import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  studentform = {
    userName: '',
    email: '',
    password: '',
  };

  constructor(private http: HttpClient,private route:Router) {}

  submitForm(data: any) {
    console.log('Form Data:', data);

    this.http
      .post('http://localhost:4000/api/v1/ecommerce/signup', data)
      .subscribe({
        next: (res) => {
          console.log('Success:', res);
          this.route.navigateByUrl("")
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
  }
}
