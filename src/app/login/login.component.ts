import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private service:ApiserviceService, private routers: ActivatedRoute) { }

  getparamemail:any;

  ngOnInit(): void {
    this.getparamemail = this.routers.snapshot.paramMap.get('id');
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  // Login not Complete error on subscribe
  login()
  {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res =>{
      const user = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['create'])
      } else{
        alert("User not found");
      }
    },err=>{
      alert("Something went Wrong!")
    })
  }

}
