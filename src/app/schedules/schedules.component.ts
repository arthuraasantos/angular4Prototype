import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  schedule:any = {}; 

  recurrenceEnabled: boolean = false;
  recurrenceOpened: boolean = false;
  recurrenceRepeatTimes: any = null;
  recurrenceRepeatFrequency: any = 0;
  recurrenceEndDate: number = 0;

  installmentsEnabled: boolean = false;
  installmentsOpened: boolean = false;

  billingEnabled: boolean = false;
  billingOpened: boolean = false;

  invoiceEnabled: boolean = false;
  invoiceOpened: boolean = false;

  blockRecurrence: boolean = false;
  blockInstallments: boolean = false;

 
  

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
      this.schedule.recurrenceConfiguration = {};
      this.recurrenceOpened = true;
    }
    else {
      this.recurrenceEnabled = false;
      this.recurrenceOpened = false;
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

  enableBilling(){
    
    if(!this.billingEnabled)
    {
      this.billingEnabled = true;
      
    }
    else 
      this.billingEnabled = false;
      
    this.collapseBillingLocal.nativeElement.click();      
  }

  enableInvoice(){
    if(!this.invoiceEnabled)
    {
      this.invoiceEnabled = true;
      
    }
    else 
      this.invoiceEnabled = false;
    
    this.collapseInvoiceLocal.nativeElement.click();
    
  }

  resetRecurrence(){
    this.schedule.recurrenceConfiguration = {
      times: 1,
      frequency:0,
      endDate: "",
      daysBeforeDue: ""
    };
  }



  openRecurrence(){
    this.recurrenceOpened = !this.recurrenceOpened;
  }

  openInstallments(){
    this.installmentsOpened = !this.installmentsOpened;
  }

  openBilling(){
    this.billingOpened = !this.billingOpened;
  }

  openInvoice(){
    this.invoiceOpened = !this.invoiceOpened;
  }  

}
