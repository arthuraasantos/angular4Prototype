import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  public recurrenceEnabled: boolean = false;
  public installmentsEnabled: boolean = false;
  billingEnabled: boolean = false;
  invoiceEnabled: boolean = false;
  public blockRecurrence: boolean = false;
  public blockInstallments: boolean = false;



  mySchedules:any = [];
  constructor() { }

  ngOnInit() {
  }

  enableRecurrence(){

    if(!this.recurrenceEnabled){
      this.recurrenceEnabled = true;
      this.installmentsEnabled = false;
    }
    else {
      this.recurrenceEnabled = false;
    }
  }

  enableInstallments(){
    if(!this.installmentsEnabled){
      this.recurrenceEnabled = false;
      this.installmentsEnabled = true;
    }
    else{
      this.installmentsEnabled = false;
    }
  }

}
