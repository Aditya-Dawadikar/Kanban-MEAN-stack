import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
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

  cards=CARDS;

  constructor() { }

  ngOnInit(): void {
  }

  deleteCardFromArray(card){
    let index=this.cards.indexOf(card);
    //console.log("index:"+index);
    this.cards.splice(index,1);
    //console.log(this.cards);
  }

  updateColumn(columnName,columnType){}
}
