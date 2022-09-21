import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ApiserviceService,private routers:ActivatedRoute,private router:Router) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.routers.snapshot.paramMap.get('id');
    if(this.getparamid)
    {
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.patchValue({
          name:res.data[0].name,
          email:res.data[0].email,
          password:res.data[0].password
  
        });
      });
    }
    
  }

  userForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  });

  userSubmit()
  {
    console.log(this.userForm.value);
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res,'res==>');
        this.userForm.reset();
        alert("Signup Successful");
        this.successmsg = res.message;
        this.router.navigate(['login']);
      });
    }
    else 
    {
      this.errormsg = 'All field is required !';
    }
  }

  //updateData
  userUpdate()
  {
    console.log(this.userForm.value,'updateform');
    
    if(this.userForm.valid)
    {
      this.service.updateData(this.userForm.value,this.getparamid).subscribe((res) => {
        console.log(res,'resupdated');
        this.successmsg = res.message;
      })
    }else
    {
      this.errormsg = 'all field is required';
    }
  }
}
