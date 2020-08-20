import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {CardApiService} from '../../../services/card-api.service';
import {ColumnApiService} from '../../../services/column-api.service';

import {Card} from '../../../shared/card';
import {CARDS} from '../../../shared/mock-card';
import { COLUMNS } from '../../../shared/mock-column';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

  @Input() card;
  @Output() deleteCard = new EventEmitter();

  Columns=[];
  Cards=CARDS;

  newCard:Card={
    task:"",
    columnName:"",
    status:"incomplete"
  };
  prevCard:Card=this.card;

  public display:boolean=true;


  constructor(private cardService:CardApiService,private columnService:ColumnApiService) {}

  ngOnInit(): void {
    this.columnService.getAllColumns().subscribe((response:any)=>{
      for(let i=0;i<response.docs.length;i++){
        this.Columns.push(response.docs[i]);
      }
    })
  }

  updateCard(task,columnName){
    let id=this.card._id;
    let status;
    let columns=[]
    this.columnService.getAllColumnNames().subscribe((response:any)=>{
      for(let i=0;i<response.columns.length;i++){
        if(response.columns[i].columnName===columnName){
          status=response.columns[i].status;
          break;
        }
      }

      let card={
        columnName:columnName,
        task:task,
        status:status
      };

      this.cardService.updateCard(id,card).subscribe((response)=>{
        console.log(response);
      })

    })
    this.createCard(columnName,task);
    this.deleteCardFromArray(this.card);
    this.togglehide();
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

  /*
  updateMechanism(task,columnName){
    this.updateCard(task,columnName);
    this.togglehide();
    window.location.reload();
  }*/
}

