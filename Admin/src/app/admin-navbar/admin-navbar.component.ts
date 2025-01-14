import { Component } from '@angular/core';
import { StorageService } from '../auth/services/storage/storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  constructor(
    private storage: StorageService,
    private router: Router,
    private toast: ToastrService
  ) { }

  logout() {
    this.storage.logout();
    this.router.navigate(['/sign-in']);
    this.toast.success("Admin logged out successfully.", "Logged Out")
  }

}
