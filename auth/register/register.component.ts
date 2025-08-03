import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onRegister() {
    console.log("User Registered:", this.user);
    localStorage.setItem(this.user.username, JSON.stringify(this.user));
    alert('Registered successfully!');
    this.router.navigate(['/login']);
  }
  gotologin() {
    this.router.navigate(['/login']);
  }
}
