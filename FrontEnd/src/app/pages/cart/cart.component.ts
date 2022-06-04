import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number
  constructor(private CartService:CartService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.CartService.getTotalPrice();


    })
  }
  removeItem(index:any){
    console.log(index)
    // this.products.splice(index, 1)
    this.CartService.removeCartItem(index)

  }
  emptycart(){
    this.CartService.removeAllCart()
    this.toastr.error(' تم حذف جميع المنتجات بداخل السلة', 'حذف', {
      "positionClass": 'toast-top-right'
    });
  }

}
