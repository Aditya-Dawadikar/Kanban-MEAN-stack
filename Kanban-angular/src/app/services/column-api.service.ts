import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColumnApiService {

  constructor(private http: HttpClient) { }

  private allColumnsUrl="http://localhost:3000/column/all";
  getAllColumns(){
    return this.http.get(this.allColumnsUrl);
  }
}
