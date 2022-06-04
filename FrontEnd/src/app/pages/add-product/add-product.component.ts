import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private global:GlobalService ,private toastr: ToastrService, private router:Router) { }


  modal:any={}
  file:any = null

  ngOnInit(): void {
  }

  handleImg(ev:any){
    console.log(ev);
    this.file = ev.target.files

  }

  handleSubmit(){
      if(this.file!=null){
        let formData = new FormData()
        formData.append("productImage", this.file[0])
        formData.append("productTitle",this.modal.productTitle)
        formData.append("productdesc",this.modal.productdesc)
        formData.append("productPrice",this.modal.productPrice)

        this.global.addProducts(formData).subscribe(data=>{


          this.toastr.success(' تم إضافة المنتج بنجاح', 'إضافــــــــــة', {
            "positionClass": 'toast-top-right'
          });
          console.log(data);
          this.router.navigateByUrl("/dashboard")

        })
      }
  }


}
