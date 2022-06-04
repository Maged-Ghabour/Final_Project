import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {

model:any ={}

    constructor(private global:GlobalService , private router:Router) { }

  ngOnInit(): void {
  }
handleSubmit(reg:NgForm){
  if(reg.valid){
    console.log(reg);
    console.log(this.model);
    this.global.singnUp(this.model).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl("")

    })
  }




}
}
