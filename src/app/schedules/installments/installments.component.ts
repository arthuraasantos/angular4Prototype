import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-schedules-installments',
  templateUrl: './installments.component.html',
  styleUrls: ['./installments.component.css']
})
export class InstallmentsComponent implements OnInit {
  installmentsQuantity: number = 1;
  arrayQuantity: any = [1];
  installments: any = [];
  observableScheduleValue: Observable<Array<number>>;
   data: Observable<Array<number>>;

  @Input() scheduleValue: number;  
  @Input() scheduleDate: any = "2017-11-06";  
  @Input() scheduleDescription: string = "Teste";  
  @Input() scheduleReference: string = "20171106";  

  constructor() { }

  ngOnInit() {
    if(this.scheduleValue != undefined && this.scheduleValue > 0)
      this.gerarParcelasComValor(this.scheduleValue);
  }

  
  gerarParcelasComValor(value){
      for(let i = 0 ; i < this.installmentsQuantity; i++)
      {
          let year = new Date(this.scheduleDate).getUTCFullYear();
          let month = new Date(this.scheduleDate).getUTCMonth(); Calcular data baseada na última parcela !!!!!
          let day = new Date(this.scheduleDate).getUTCDate();
          let formattedDate = new Date(year,month,day);
          let nextDate  = new Date(formattedDate.setMonth(formattedDate.getMonth() + 1));
          let installment = 
          { 
            "value": value/this.arrayQuantity,
            "dueDate": nextDate,
            "description":this.scheduleDescription,
            "reference":this.scheduleReference
          }

          this.installments.push(installment);
      }
  }


  generateInstallmentsItems(){
    this.arrayQuantity = new Array();
    for(var x = 0; x < this.installmentsQuantity; x++){
      this.arrayQuantity.push(1);
    }
    
  }

}
