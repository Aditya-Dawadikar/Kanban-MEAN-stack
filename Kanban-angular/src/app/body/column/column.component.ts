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
  childCards:any=[];

  constructor(private cardService:CardApiService) { }

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe((cards:any)=>{
      this.getChildCards(cards.docs);
    },(err)=>{
      console.log(err);
    })
  }

  getChildCards(cards){
    for(let i=0;i<cards.length;i++){
      if(this.column.columnName === cards[i].columnName){
        this.childCards.push(cards[i]);
        this.column.cards.push(cards[i]);
      }
    }
  }

  deleteCardFromArray(card){
    alert('this card will be permanently deleted');
    let index=this.childCards.indexOf(card);
    this.cardService.deleteCard(this.childCards[index]._id).subscribe((response)=>{
      console.log(response);
    });
    this.childCards.splice(index,1);
  }

  //updateColumn(columnName,columnType){}
}
