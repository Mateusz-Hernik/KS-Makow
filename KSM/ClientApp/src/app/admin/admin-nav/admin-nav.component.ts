import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'ksm-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
