import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  recurrenceEnabled: boolean = false;
  recurrenceRepeatTimes: any = null;
  recurrenceRepeatFrequency: any = 0;
  recurrenceEndDate: number = 0;

  installmentsEnabled: boolean = false;
  billingEnabled: boolean = false;
  invoiceEnabled: boolean = false;
  blockRecurrence: boolean = false;
  blockInstallments: boolean = false;

 
  schedule:any = {}; 
  
  constructor() { }

  ngOnInit() {
  }

  enableRecurrence(){

    if(!this.recurrenceEnabled){
      this.recurrenceEnabled = true;
      this.installmentsEnabled = false;
      this.schedule.recurrenceConfiguration = {
        times : 400
      };
    }
    else {
      this.recurrenceEnabled = false;
      this.resetRecurrence();
    }
  }

  enableInstallments(){
    if(!this.installmentsEnabled){
      this.recurrenceEnabled = false;
      this.resetRecurrence();
      this.installmentsEnabled = true;
    }
    else{
      this.installmentsEnabled = false;
    }
  }

  resetRecurrence(){
    this.schedule.recurrenceConfiguration = {
      times: 1,
      frequency:0,
      endDate: "",
      daysBeforeDue: ""
    };
  }

}
