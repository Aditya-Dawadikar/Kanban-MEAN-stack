import { Component, OnInit} from '@angular/core';
import {ProgressStatusService} from '../../../services/progress-status.service';

import {CARDS} from '../../../shared/mock-card';
import { COLUMNS } from '../../../shared/mock-column';
import { Card } from 'src/app/shared/card';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  COLUMNS=COLUMNS;
  newCard:Card={
    columnName:"Todo",
    task:"",
    status:""
  };
  public tohide=false;

  constructor(private progressStatus:ProgressStatusService) { }

  ngOnInit(): void {
  }

  createCard(columnName,task){
    if(COLUMNS.length===0){
      alert("you must add a column first!");
    }else
    if(columnName!=""){
      this.newCard.task=task;
      this.newCard.columnName=columnName;
      let index = COLUMNS.findIndex(column => column.columnName ===columnName);
      this.newCard.status=COLUMNS[index].columnType;
      CARDS.push(this.newCard);

      //call the update method to update the progessbar
      this.progressStatus.updateProgress(this.newCard);
    }else{
      alert("Card must belong to a column");
    }
  }


}
