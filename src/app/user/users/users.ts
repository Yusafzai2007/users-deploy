import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User, UsersApiResponse } from '../interace';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
   userdata: User[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get<UsersApiResponse>('http://localhost:4000/api/v1/ecommerce/users')
      .subscribe({
        next: (res) => {
          this.userdata = res.message;
          this.loading = false;
          console.log('Users:', this.userdata);
        },
        error: (err) => {
          console.error('API Error:', err);
          this.loading = false;
        },
      });
  }
}
