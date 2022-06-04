import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private global :GlobalService ,private toastr: ToastrService) { }

    products:any =[]
  count = 0
  counter(){
  this.count++
  }
    collection:any = []
  ngOnInit(): void {
    this.global.allProducts().subscribe(items =>{
      this.products = items.data
      console.log(this.products);

    })
  }

  delPro(product:any){
    this.collection.splice(product-1,1)
     this.global.delProduct(product).subscribe(result =>{
      console.log(result);

      this.toastr.error(' تم حذف المنتج بنجاح', 'حــــذف', {
        "positionClass": 'toast-top-right'
      });

      this.global.allProducts().subscribe(items =>{
        this.products = items.data
        console.log(this.products);

      })

    })

  }

}
