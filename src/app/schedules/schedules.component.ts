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


  // @ViewChild('recurrenceChevronDown') recurrenceChevronDown: any;
  // @ViewChild('recurrenceChevronUp') recurrenceChevronUp: any;


  
  constructor() { }

  ngOnInit() {
  }

  enableRecurrence(){

    if(!this.recurrenceEnabled){
      this.recurrenceEnabled = true;
      this.installmentsEnabled = false;
      this.schedule.recurrenceConfiguration = {};
      // this.recurrenceChevronDown.nativeElement.classList.add('invisible');
      // this.recurrenceChevronUp.nativeElement.classList.remove('invisible');
      this.collapseRecurrenceLocal.nativeElement.click();
    }
    else {
      this.recurrenceEnabled = false;
      this.resetRecurrence();
      // this.recurrenceChevronDown.nativeElement.classList.remove('invisible');
      // this.recurrenceChevronUp.nativeElement.classList.add('invisible');
    }

    
  }

  enableInstallments(){
    if(!this.installmentsEnabled){
      this.recurrenceEnabled = false;
      this.resetRecurrence();
      this.installmentsEnabled = true;
      this.collapseInstallmentsLocal.nativeElement.click();
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

  enableBilling(){
    
    if(!this.billingEnabled)
    {
      this.billingEnabled = true;
      this.collapseBillingLocal.nativeElement.click();
    }
    else 
      this.billingEnabled = false;
      
  }

  enableInvoice(){
    if(!this.invoiceEnabled)
    {
      this.invoiceEnabled = true;
      this.collapseInvoiceLocal.nativeElement.click();
    }
    else 
      this.invoiceEnabled = false;
      
    
  }

}
