import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';


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

  @ViewChild('collapseRecurrenceLocal') collapseRecurrenceLocal: any;
  @ViewChild('collapseInstallmentsLocal') collapseInstallmentsLocal: any;
  @ViewChild('collapseBillingLocal') collapseBillingLocal: any;
  @ViewChild('collapseInvoiceLocal') collapseInvoiceLocal: any;
  
  constructor() { }

  ngOnInit() {
  }

  enableRecurrence(){

    if(!this.recurrenceEnabled){
      this.recurrenceEnabled = true;
      this.installmentsEnabled = false;
      this.schedule.recurrenceConfiguration = {
        times : ""
      };
    }
    else {
      this.recurrenceEnabled = false;
      this.resetRecurrence();
    }

    this.collapseRecurrenceLocal.nativeElement.click();
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
    this.collapseInstallmentsLocal.nativeElement.click();
  }

  resetRecurrence(){
    this.schedule.recurrenceConfiguration = {
      times: 1,
      frequency:0,
      endDate: "",
      daysBeforeDue: ""
    };
  }

  enableBilling(){
    this.collapseBillingLocal.nativeElement.click();
  }

  enableInvoice(){
    this.collapseInvoiceLocal.nativeElement.click();
    
  }

}
