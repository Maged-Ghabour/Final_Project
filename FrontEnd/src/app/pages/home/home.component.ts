import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private global :GlobalService ,private CartService:CartService,private toastr: ToastrService) { }

    products:any =[]

  ngOnInit(): void {

    // this.global.singleUser().subscribe(data=>{
    //   console.log(data);

    // })



    this.global.allProducts().subscribe(items =>{
      this.products = items.data

      console.log(this.products);

      //cart

      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1 , total:a.productPrice})
      });

    })
  }

  addtocart(product:any){
    this.CartService.addtoCart(product)
    this.toastr.warning(' تم إضافة المنتج  بداخل السلة', 'إضافة', {
      "positionClass": 'toast-top-right'
    });
  }



}
