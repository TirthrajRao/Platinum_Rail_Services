import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor() {
    if (this.isLoggedIn)
      localStorage.setItem('userRole', 'admin');
    else
      localStorage.removeItem('userRole');
  }

  ngOnInit() {

  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    if (this.isLoggedIn)
      localStorage.setItem('userRole', 'admin');
    else
      localStorage.removeItem('userRole');
  }

}
