import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedules-recurrences',
  templateUrl: './recurrences.component.html',
  styleUrls: ['./recurrences.component.css']
})
export class RecurrencesComponent implements OnInit {
  endTime: number; 


  @Input() recurrence:any = {
    times:null,
    frequency: null
  };
  
  constructor() { }

  ngOnInit() {
  }
 
}
