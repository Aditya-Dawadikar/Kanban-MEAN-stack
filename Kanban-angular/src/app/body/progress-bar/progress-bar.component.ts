import { Component, OnInit, Input } from '@angular/core';
import {ProgressStatusService} from '../../services/progress-status.service';

import {CARDS} from '../../shared/mock-card';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  Cards=CARDS;
  totalCards:number;
  progressCards:number;
  completeCards:number;
  issueCards:number;
  denominator:number;

  progressPercentage:number=0;
  completePercentage:number=0;
  issuePercentage:number;

  constructor(private progressService:ProgressStatusService) {
  }

  ngOnInit(): void {
    this.progressService.progressStausObservable$.subscribe(card=>{
      //calculate
      this.totalCards=this.Cards.length;
      this.progressCards=this.completeCards=this.issueCards=0;
      for(let i=0;i<this.totalCards;i++){
        if(this.Cards[i].status==='in-progress'){
          this.progressCards++;
        }else if(this.Cards[i].status==='complete'){
          this.completeCards++;
        }else if(this.Cards[i].status==='issue'){
          this.issueCards++;
        }
      }
      this.denominator=this.totalCards-this.issueCards;
      this.progressPercentage = (this.progressCards/this.denominator)*100;
      this.completePercentage = (this.completeCards/this.denominator)*100;
      //console.log(this.progressPercentage);
      //console.log(this.completePercentage);
    });
  }
}
