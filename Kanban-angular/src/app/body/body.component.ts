import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ColumnApiService} from '../services/column-api.service';
import {CardApiService} from '../services/card-api.service';

import {COLUMNS} from '../shared/mock-column';
import {CARDS} from '../shared/mock-card';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  @Output() columnEmitter= new EventEmitter();

  constructor(private columnService:ColumnApiService,private cardService:CardApiService) {
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
    alert("all the cards under this column will be deleted");
    let index=this.Columns.indexOf(column);
    for(let i=0;i<column.cards.length;i++){
      this.cardService.deleteCard(column.cards[i]._id).subscribe((response)=>{
        console.log(response);
      });
    }
    this.columnService.deleteColumn(this.Columns[index]._id).subscribe((response)=>{
      console.log(response);
    });
    this.Columns.splice(index,1);
  }
}
