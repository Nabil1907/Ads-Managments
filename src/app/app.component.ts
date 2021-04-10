import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdsManagment';
  advertisor = false;
  admin = false;
  id: string;
  username: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      // Check on admin account by his ID
      if (localStorage.getItem('username') == "admin") {
        this.admin = true;
        this.id = localStorage.getItem('token');
        this.username = "ADMIN";
      } else {
        this.advertisor = true;
        this.id = localStorage.getItem('token');
        this.username = localStorage.getItem('username')
      }
    }

  }
  // Logout
  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }


}
