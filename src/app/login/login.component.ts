import { Component, OnInit } from '@angular/core';
import {FormControl , FormBuilder , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  profileForm = false ;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.loginForm.value);
}
}
