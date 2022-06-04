import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users:any =[]
  constructor(private global :GlobalService , private activated:ActivatedRoute) { }

  ngOnInit(): void {

    this.global.getUsers().subscribe(items =>{
      this.users = items.data
      console.log(this.users);

    })
  }
  }




