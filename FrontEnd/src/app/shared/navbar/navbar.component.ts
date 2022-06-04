import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public totalItem :number = 0
  constructor(public global:GlobalService,private CartService:CartService) {
    let token = localStorage.getItem("token")
    if(token){
      this.global.isLogin = true;
    }

   }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  handleLogOut(){
    this.global.logOut().subscribe(res =>{
    localStorage.removeItem("token")
    this.global.isLogin = false
  })
  }
}


