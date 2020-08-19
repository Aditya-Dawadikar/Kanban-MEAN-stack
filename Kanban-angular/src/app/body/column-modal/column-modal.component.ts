import { Component, OnInit } from '@angular/core';
import {ColumnApiService} from '../../services/column-api.service';

import {COLUMNS} from '../../shared/mock-column';

@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})

export class ColumnModalComponent implements OnInit {

  constructor(private columnService:ColumnApiService) { }

  ngOnInit(): void {
  }

  newColumn={
    columnName:"",
    cards:[],
    columnType:""
  }

  showclass:"show";
  hideClass:"hide";

  public tohide=false;

  createColumn(columnName,columnType){
    if(columnName!=""){
      this.newColumn.columnName=columnName;
      this.newColumn.columnType=columnType;
      COLUMNS.push(this.newColumn);
      this.columnService.createNewColumn(this.newColumn).subscribe((response:any)=>{
        console.log(response);
      })
    }else{
      alert("Column must be named");
    }
  }

  hideModal(){
    this.tohide=true;
  }
}
