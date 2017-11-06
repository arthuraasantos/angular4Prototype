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
      
      this.collapseRecurrenceLocal.nativeElement.click();
      
      this.closeToggles(0);
    }
    else {

      this.recurrenceEnabled = false;
      this.resetRecurrence();

      if(this.recurrenceOpened){
        this.collapseRecurrenceLocal.nativeElement.click();
      }
        
    }
  }

  enableInstallments(){
    if(!this.installmentsEnabled){
      this.recurrenceEnabled = false;
      this.resetRecurrence();
      this.installmentsEnabled = true;
      this.collapseInstallmentsLocal.nativeElement.click();

      this.closeToggles(1);
    }
    else{
      this.installmentsEnabled = false;

      if(this.installmentsOpened)
        this.collapseInstallmentsLocal.nativeElement.click();
    }
  }

  enableBilling(){
    
    if(!this.billingEnabled)
    {
      this.billingEnabled = true;
      this.collapseBillingLocal.nativeElement.click();    
      
      this.closeToggles(2);
    }
    else {
      this.billingEnabled = false;

      if(this.billingOpened)  
        this.collapseBillingLocal.nativeElement.click();      
    }
    
  }

  enableInvoice(){
    if(!this.invoiceEnabled)
    {
      this.invoiceEnabled = true;
      this.collapseInvoiceLocal.nativeElement.click();

      this.closeToggles(3);
    }
    else {
      this.invoiceEnabled = false;
      
      if(this.invoiceOpened)  
        this.collapseInvoiceLocal.nativeElement.click();
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


  openRecurrence(){
    this.recurrenceOpened = !this.recurrenceOpened;
    this.closeToggles(0);
  }

  openInstallments(){
    this.installmentsOpened = !this.installmentsOpened;
    this.closeToggles(1);
  }

  openBilling(){
    this.billingOpened = !this.billingOpened;
    this.closeToggles(2);
  }

  openInvoice(){
    this.invoiceOpened = !this.invoiceOpened;
    this.closeToggles(3);
  }
  
  closeToggles(value: number){
  switch(value)
  {
    case 0: // Recurrence
            this.installmentsOpened = false;
            this.billingOpened = false;
            this.invoiceOpened = false;
            break;
    case 1: // Installments
            this.recurrenceOpened = false;
            this.billingOpened = false;
            this.invoiceOpened = false;
            break;            
    case 2: // Billing
            this.recurrenceOpened = false;
            this.installmentsOpened = false;
            this.invoiceOpened = false;
            break;          
    case 3: // Invoice
            this.recurrenceOpened = false;
            this.installmentsOpened = false;
            this.billingOpened = false;
            break;                        
  }
    
  }

}
