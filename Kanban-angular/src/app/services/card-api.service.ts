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
  /*
  private updateCardUrl = "http://localhost:3000/card/update/:id";
  private deleteCardUrl = "http://localhost:3000/card/delete/:id";
  */

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

}
