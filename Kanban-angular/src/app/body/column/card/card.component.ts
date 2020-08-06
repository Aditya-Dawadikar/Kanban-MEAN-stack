import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Card} from '../../../shared/card';
import {CARDS} from '../../../shared/mock-card';
import { COLUMNS } from '../../../shared/mock-column';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

  @Input() card:Card;
  @Output() deleteCard = new EventEmitter();

  Columns=COLUMNS;
  Cards=CARDS;

  newCard:Card={
    task:"",
    columnName:"",
    status:"incomplete"
  };
  prevCard:Card=this.card;

  public display:boolean=true;


  constructor() {}

  ngOnInit(): void {
  }

  updateCard(task,columnName){
    this.createCard(columnName,task);
    this.deleteCardFromArray(this.card);
  }

  createCard(columnName,task){
    if(this.Columns.length===0){
      alert("you must add a column first!");
    }else
    if(columnName!=""){
      //initialize new card
      if(task==""){
        this.newCard.task=this.card.task;
      }else{
        this.newCard.task=task;
      }
      this.newCard.columnName=columnName;
      let index = this.Columns.findIndex(column => column.columnName == columnName);
      this.newCard.status=COLUMNS[index].columnType;
      CARDS.push(this.newCard);
    }else{
      alert("Card must belong to a column");
    }
  }
  deleteCardFromArray(card){
    let index=this.Cards.indexOf(card);
    this.Cards.splice(index,1);
  }

  togglehide(){
    this.display=!this.display;
  }
}

