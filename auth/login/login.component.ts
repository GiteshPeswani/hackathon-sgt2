import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  credentials = {
    username: '',
    password: ''
  };


  onLogin() {
    const savedUser = localStorage.getItem(this.credentials.username);
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      if (parsedUser.password === this.credentials.password) {
        alert('Login successful!');
        this.router.navigate(['/home-page']);
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('User not found. Please register.');
    }
  }
  gotoaccount() {
    this.router.navigate(['/register']);
  }
}
