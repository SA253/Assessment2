import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  details:Details[]=[];
  data:Data[]=[];
  constructor(public svc:DataService) { }

  ngOnInit() {
    this.details = this.svc.details;
    console.log(this.details);
    this.data = this.svc.data;
    console.log(this.data);


  }


}
