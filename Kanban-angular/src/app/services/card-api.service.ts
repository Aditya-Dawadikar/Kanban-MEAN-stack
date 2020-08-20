import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Card } from '../shared/card';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  constructor(private http:HttpClient) { }

  private newCardUrl = "http://localhost:3000/card/new";
  private getAllCardsUrl = "http://localhost:3000/card/all";
  private updateCardUrl = "http://localhost:3000/card/update/";
  private deleteCardUrl = "http://localhost:3000/card/delete/";

  getAllCards(){
    return this.http.get(this.getAllCardsUrl);
  }

  createNewCard(card:Card){
    let reqBody = {
        columnName: card.columnName,
        task: card.task,
        status: card.status
    }
    return this.http.post(this.newCardUrl,reqBody);
  }

  deleteCard(id:string){
    let deleteUrl = this.deleteCardUrl + id;
    return this.http.delete(deleteUrl);
  }

  updateCard(id:string,card){
    let updateUrl = this.updateCardUrl + id;
    let reqBody={
      columnName: card.columnName,
      task: card.task,
      status: card.status
    }
    return this.http.patch(updateUrl,reqBody);
  }

}
