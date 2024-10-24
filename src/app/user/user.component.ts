import { Component } from '@angular/core';
import { User } from '../models/user.model'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private userService: UserService) { }

  // Méthode pour enregistrer un nouvel utilisateur
  registerUser() {
    const newUser: User = {
      username: 'exampleUser',
      email: 'user@example.com',
      password: 'password123'
    };

    this.userService.register(newUser).subscribe(
      response => {
        console.log('User registered successfully:', response);
      },
      error => {
        console.error('Error registering user:', error);
      }
    );
  }
}
