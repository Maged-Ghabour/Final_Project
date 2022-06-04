import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl("",[Validators.required , Validators.email]),
    password : new FormControl("",[Validators.required , Validators.minLength(5)])
  })
  isSubmitted = false
  constructor(private global:GlobalService , private router:Router) {
    let token = localStorage.getItem("token")
    // if("token") this.router.navigateByUrl("/home")


   }

  get email(){return this.loginForm.get("email")}
  get userInfo(){return this.loginForm.controls}

  ngOnInit(): void {
  }
  handleLogin(){
    this.isSubmitted = true
    console.log(this.loginForm);
    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
          console.log(res);

        if(res.data.user.isAdmin == true){
          console.log(res);
          localStorage.setItem("token",res.data.token)
          this.router.navigateByUrl("/dashboard")






        }
        else{
          localStorage.setItem("token",res.data.token)
          this.router.navigateByUrl("/home")
          this.global.isLogin = true
        }


      })
    }
  }

}
