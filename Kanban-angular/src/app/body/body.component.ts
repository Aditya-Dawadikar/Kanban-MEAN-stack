import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ColumnApiService} from '../services/column-api.service';

import {COLUMNS} from '../shared/mock-column';
import {CARDS} from '../shared/mock-card';

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
    console.log(this.Columns[index]);
    this.columnService.deleteColumn(this.Columns[index]._id).subscribe((response)=>{
      console.log(response);
    });
    this.Columns.splice(index,1);
    /*
    let newArray=this.Cards.filter(function(card){
      return card.status!==column.columnType;
    });
    this.Cards=newArray;
    */
  }
}
