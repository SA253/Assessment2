import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
    
detail:Details;
  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.detail = this.svc.details[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  deleteBook(){
    this.svc.details.splice(this.svc.details.indexOf(this.detail), 1);
  }

  }


