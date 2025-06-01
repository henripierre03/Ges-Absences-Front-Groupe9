import { Component } from '@angular/core';
import { AuthentificationService } from '../../../shared/services/impl/authentification.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(public authService: AuthentificationService) {}

  onLogout() {
    this.authService.Logout();
    window.location.href = '/security'; // Redirect to the login page
    // window.location.reload(); // Reload the page to reflect the logout state}
  }
}
