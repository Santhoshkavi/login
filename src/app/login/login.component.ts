import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data, value } from '../data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

 
val:value=new value();
  constructor(public http:HttpClient ,public route:Router) { }

  ngOnInit(): void {
  }
login(){
  this.http.post<any>('http://localhost:4200/api/auth', this.val).subscribe((x)=>{
    if("success"){
      this.route.navigate(["/view"]);

    }else {
      alert("Invalid data !!!!")
    }
  })
}
}
