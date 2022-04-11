import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  formUser;
  username = 'Samer'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.formUser = new FormGroup({
      username : new FormControl(),
      familyName : new FormControl(),
      inputPassword : new FormControl(),
      confirmPassword : new FormControl(),
      email : new FormControl(),
      address : new FormControl(),
      tel : new FormControl(),
      cin : new FormControl()
    })
  }

  onClickSubmit(data){
    this.hardcodedAuthenticationService.create(data).subscribe((res)=>{
      this.invalidLogin = false,
      this.router.navigate(['welcome', this.username])
    },(er)=>{
      this.invalidLogin = true
    })
  }

  handleLogin() {
    this.hardcodedAuthenticationService.executeJwtAuthenticationService(this.username, this.password).subscribe((res)=>{
      this.invalidLogin = false,
      this.router.navigate(['welcome', this.username])
    },(er)=>{
      this.invalidLogin = true
    })
/*
    if(this.hardcodedAuthenticationService.executeJwtAuthenticationService(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    */
  }
}
