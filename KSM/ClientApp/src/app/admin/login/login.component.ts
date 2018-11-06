import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  isLoginCorrect: boolean = true;

  constructor(private _userService: UserService, private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  async logIn() {
    await this._userService.loginUser(new User(this.username.value, this.password.value)).then(
      (res) => {
        if (res) {
          this.isLoginCorrect = true;
          this._authService.sendToken(this.username.value);
          this.router.navigate(['admin/home']);
        } else {
          // TODO error catch
          alert("BŁĄD PODCZAS LOGOWANIA");
          this.isLoginCorrect = false;
        }
      }
    );
  }

  loginByPressEnter(event) {
    if (event.keyCode == 13) {
      this.logIn();
    }
  }
}
