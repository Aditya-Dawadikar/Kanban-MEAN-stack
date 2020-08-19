import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {COLUMNS} from '../shared/mock-column';
import {CARDS} from '../shared/mock-card';
import {ColumnApiService} from '../services/column-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  @Output() columnEmitter= new EventEmitter();

  constructor(private columnService:ColumnApiService) {
  }

  //interpolation variables
  Columns:any;
  Cards= CARDS;

  ngOnInit(): void {
    //trying to fetch data from server
    this.columnService.getAllColumns().subscribe((columns:any)=>{
      this.Columns = columns.docs;
    },(err)=>{
      console.log(err);
    })
  }

  deleteColumnFromArray(column){
    let index=this.Columns.indexOf(column);
    this.Columns.splice(index,1);

    let newArray=this.Cards.filter(function(card){
      return card.status!==column.columnType;
    });
    this.Cards=newArray;
  }
}
