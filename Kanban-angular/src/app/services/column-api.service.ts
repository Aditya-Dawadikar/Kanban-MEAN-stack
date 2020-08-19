import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColumnApiService {

  constructor(private http: HttpClient) { }

  private allColumnsUrl="http://localhost:3000/column/all";
  private newColumnUrl="http://localhost:3000/column/new";
  private columnNamesUrl="http://localhost:3000/column/all/names";
  private deleteColumnUrl = "http://localhost:3000/column/delete/";

  getAllColumns(){
    return this.http.get(this.allColumnsUrl);
  }

  getAllColumnNames(){
    return this.http.get(this.columnNamesUrl);
  }

  createNewColumn(column:any){
    let reqBody = {
      columnName: column.columnName,
      columnType: column.columnType
    }
    return this.http.post(this.newColumnUrl,reqBody);
  }

  updateColumn(){

  }

  deleteColumn(id:string){
    let deleteUrl = this.deleteColumnUrl + id;
    return this.http.delete(deleteUrl)
  }

}
