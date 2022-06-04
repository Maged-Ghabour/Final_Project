
import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public navFlag:boolean = true
  public isLogin:boolean = false

  urlPath = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  singnUp(obj:any):Observable<any>{
  return this.http.post(`${this.urlPath}/user/register` , obj )
  }


  login(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}/user/login` , obj)
  }

  allProducts():Observable<any>{
    return this.http.get(`${this.urlPath}/product/allProducts` )
  }


  // /user/logOut

  logOut():Observable<any>{
    return this.http.post(`${this.urlPath}/user/logOut` , null )
  }


  // getUsers():Observable<any>{
  //   return this.http.get(`${this.urlPath}/user/allUsers` )
  // }


  getUsers():Observable<any>{
    return this.http.get(`${this.urlPath}/user/allUsers` )
  }

  addProducts(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}/product/addProduct` , obj)
  }


    // product/delProduct/62983bd1ecb1ef098f41c8c9
  delProduct(_id:any){
    return this.http.delete(`${this.urlPath}/product/delProduct/${_id}`)
  }



  // singleUser():Observable<any>{
  //   return this.http.get(`${this.urlPath}/user/me` )
  // }



}

