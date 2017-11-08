import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedules-installments',
  templateUrl: './installments.component.html',
  styleUrls: ['./installments.component.css']
})
export class InstallmentsComponent implements OnInit {
  installmentsQuantity: number = 1;
  arrayQuantity: any = [1];
  installments: any = [];

  @Input() scheduleValue: number;  
  @Input() scheduleDate: any = "2017-11-06";  
  @Input() scheduleDescription: string = "Teste";  
  @Input() scheduleReference: string = "20171106";

  @Output() notify = new EventEmitter();
  
  onClick() {
    this.notify.emit('Click from nested component');
  }

  constructor() { }

  ngOnInit() {

    if(this.scheduleValue != undefined && this.scheduleValue > 0)
      this.generateInstallmentsItems(this.scheduleValue);
    else {
      this.generateInstallmentsItems(0);
    }
  }

  generateInstallmentsItems(value){
      this.installments = [];
      let baseDate: any;
      let _value = parseFloat(value);
      
      if(isNaN(_value))
        _value = 0;
      
      let installmentValue = _value/this.installmentsQuantity;

      for(let i = 0 ; i < this.installmentsQuantity; i++)
      {
          if(baseDate == null)
            baseDate = this.scheduleDate;

          let year = new Date(baseDate).getUTCFullYear();
          let month = new Date(baseDate).getUTCMonth(); 
          let day = new Date(baseDate).getUTCDate();
          let formattedDate = new Date(year,month,day);
          let installmentDate  = new Date(formattedDate.setMonth(formattedDate.getMonth() + 1));
          let stringDate = installmentDate.getFullYear() + "-" + ("0" + (installmentDate.getMonth()+1)).slice(-2) + "-" + ("0" + (installmentDate.getUTCDate())).slice(-2);
          
          let installment = 
          { 
            "index":i + 1,
            "value": installmentValue,
            "date": stringDate,
            "description":this.scheduleDescription,
            "reference":this.scheduleReference
          }

          this.installments.push(installment);
          baseDate = installmentDate;
      }
  }
}
