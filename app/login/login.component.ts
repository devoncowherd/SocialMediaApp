import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  

  responseMessage = '';
  alertClass = '';

  constructor(private service:ApiserviceService,private router:ActivatedRoute, private routers: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void { }


  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.minLength(9)]],
  });

  // Login not Complete error on subscribe
  get id(){
    return this.loginForm.get('id');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmitHandler() 
  {
    this.authService.login(this.loginForm.valid).subscribe((response) =>{
      this.responseMessage = 'Login Successful';
      this.alertClass = 'alert-success';
    });
  }

}
