import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {COLUMNS} from '../shared/mock-column';
import {CARDS} from '../shared/mock-card';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  @Output() columnEmitter= new EventEmitter();

  Columns=COLUMNS;
  Cards=CARDS;

  constructor() {
  }

  ngOnInit(): void {
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
