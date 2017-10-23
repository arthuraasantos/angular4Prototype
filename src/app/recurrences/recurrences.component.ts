import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedules-recurrences',
  templateUrl: './recurrences.component.html',
  styleUrls: ['./recurrences.component.css']
})
export class RecurrencesComponent implements OnInit {
  endTime: number; 

  recurrence:any = {
    times:null,
    frequency: 0,
    endDate: 0,
    daysBefore: ""
  };
  
  constructor() { }

  ngOnInit() {
  }
 
}
