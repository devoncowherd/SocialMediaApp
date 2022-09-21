import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
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
        this.successmsg = res.message;
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
