import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number=0;
  name:string;
  dob:number;
  address:string;
  phone:number;
  degree:string;
  marks:number;
  stream:string;
  college:string;
newDetails : Details;
newData:Data;
  constructor(private svc:DataService  ) { }

  ngOnInit() {
  }
  create(){
   
    this.newDetails = new Details(this.id,this.name, this.dob, this.address, this.phone);
    console.log(this.newDetails);
    this.svc.create(this.newDetails);
    this.reset();
    
  }
  operation(){
    this.newData = new Data(this.id,this.degree,this.marks,this.stream,this.college);
    console.log(this.newData);
    this.svc.operation(this.newData);
    this.reset1();
  }
  reset(){
   this.name="";
   this.dob=0;
   this.address="";
  this.phone=0;
  }
  reset1(){
  this.degree="";
  this.marks=0;
  this.stream="";
 this.college="";

  }
}
