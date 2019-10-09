import { Injectable } from '@angular/core';
import { Details } from './details';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Data[] = [];
  details: Details[] = [];
id:number = 0;
  constructor() { }
create(b:Details){
  ++this.id;
  b.id=this.id;
  
  this.details.push(b);
}
operation(c:Data){
  this.id++;
  c.id=this.id;
  
  this.data.push(c);
}
}
