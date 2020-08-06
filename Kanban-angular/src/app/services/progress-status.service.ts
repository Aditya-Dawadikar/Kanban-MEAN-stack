import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Card} from '../shared/card';

@Injectable({
  providedIn: 'root'
})
export class ProgressStatusService {

  private progressSubject=new Subject();
  progressStausObservable$=this.progressSubject.asObservable();

  constructor() { }

  updateProgress(card:Card){
    this.progressSubject.next(card);
  }
}
