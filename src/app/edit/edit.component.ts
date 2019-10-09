import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Details } from '../details';
import {Data } from '../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  detail: Details;
  bookId:number;
  datas:Data;
  book:number;
  
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.details.forEach(element => {
      if(element.id == this.bookId){
        this.detail = element;
      }
    });
    this.book= parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.data.forEach(element => {
      if(element.id == this.book){
        this.datas = element;
      }
    });

  }

  editBook() {
    this.svc.details[this.svc.details.indexOf(this.detail)] = this.detail;
  }
  editData() {
    this.svc.data[this.svc.data.indexOf(this.datas)] = this.datas;
  }
}

