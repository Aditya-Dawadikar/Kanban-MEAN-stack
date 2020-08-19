import { Component, OnInit} from '@angular/core';
import {CardApiService} from '../../../services/card-api.service';
import {ColumnApiService} from '../../../services/column-api.service';

import {CARDS} from '../../../shared/mock-card';
import { COLUMNS } from '../../../shared/mock-column';
import { Card } from 'src/app/shared/card';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})

export class CardModalComponent implements OnInit {

  COLUMNS:any=[];
  newCard:Card={
    columnName:"Todo",
    task:"",
    status:""
  };
  public tohide=false;

  constructor(private cardService:CardApiService,private columnService:ColumnApiService) { }

  ngOnInit(): void {
    this.columnService.getAllColumns().subscribe((response:any)=>{
      for(let i=0;i<response.docs.length;i++){
        this.COLUMNS.push(response.docs[i]);
      }
      console.log(this.COLUMNS);
    })
  }

  createCard(columnName,task){
    if(COLUMNS.length===0){
      alert("you must add a column first!");
    }else
    if(columnName!=""){
      this.newCard.task=task;
      this.newCard.columnName=columnName;
      let index = this.COLUMNS.findIndex(column => column.columnName ===columnName);
      this.newCard.status=this.COLUMNS[index].columnType;
      CARDS.push(this.newCard);

      this.cardService.createNewCard(this.newCard).subscribe((response:any) => {
        console.log(response);
      });

    }else{
      alert("Card must belong to a column");
    }
  }


}
