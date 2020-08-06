import {Column} from './column';
import {Card} from './card';
import {CARDS} from './mock-card';


export const COLUMNS:Column[]=[
  {
    columnName:"Todo",
    cards:CARDS,
    columnType:"incomplete"
  },
  {
    columnName:"Done",
    cards:CARDS,
    columnType:"complete"
  },
  {
    columnName:"Progress",
    cards:CARDS,
    columnType:"in-progress"
  }
];


//export const COLUMNS:Column[]=[];
