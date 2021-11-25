import { Component, OnInit } from '@angular/core';
import { data } from '../data';
//import { DataserviceService } from '../dataservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: data = new data;
  places: any = [];
  url = "http://localhost:4200/api/incert";
  o="";
  constructor(public http: HttpClient,public route:Router) {

    http.get<string[]>(this.url).toPromise().then((x) => {
      this.places = x;
    });

  }
  ngOnInit(): void {
  }
  reload() {
    this.http.get<string[]>(this.url).toPromise().then((x) => {
      this.places = x;
    });
  }

  submit() {

    this.http.post<any>('http://localhost:4200/api/insert', this.data).subscribe(()=>{})
    this.reload();
    this.data=new data;
    this.route.navigate(["/view"]);


  }
}
