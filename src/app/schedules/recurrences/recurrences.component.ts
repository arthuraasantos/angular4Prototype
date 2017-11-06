import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules-recurrences',
  templateUrl: './recurrences.component.html',
  styleUrls: ['./recurrences.component.css']
})
export class RecurrencesComponent implements OnInit {
  endTime: number; 
  
    recurrence:any = {
      times:null,
      frequency: 2,
      endDate: 0,
      afterXDays:null,
      afterXDate:null,
      daysBefore: "",
      endTime: "1"
    };


  constructor() { }

  ngOnInit() {
  }

}
