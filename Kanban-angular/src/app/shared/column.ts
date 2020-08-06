import {Card} from './card';

export interface Column{
  columnName:string;
  columnType:string;
  cards:Card[];
}
