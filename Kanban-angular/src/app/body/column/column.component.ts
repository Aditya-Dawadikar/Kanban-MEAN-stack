import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import {CardApiService} from '../../services/card-api.service';

import {CARDS} from '../../shared/mock-card';
import {Column} from '../../shared/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Output() deleteColumn = new EventEmitter();
  @Output() addCardEmitter = new EventEmitter();
  @Input() column:Column;

  //interpolation variables
  cards=CARDS;

  constructor(private cardService:CardApiService) { }

  ngOnInit(): void {
    //trying to fetch data from server
    this.cardService.getAllCards().subscribe((cards:any)=>{
      this.cards=cards.docs;
    },(err)=>{
      console.log(err);
    })
  }

  deleteCardFromArray(card){
    let index=this.cards.indexOf(card);
    //console.log("index:"+index);
    this.cards.splice(index,1);
    //console.log(this.cards);
  }

  updateColumn(columnName,columnType){}
}
