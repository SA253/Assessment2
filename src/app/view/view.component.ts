import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { Data } from '../data';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  details:Details[]=[];
  data:Data[]=[];
  constructor(public svc:DataService) { }

  ngOnInit() {
 
  this.details = this.svc.details;
  console.log(this.details);
  
}
}
