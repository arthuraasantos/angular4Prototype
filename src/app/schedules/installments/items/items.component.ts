import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-schedules-installments-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 
  @Input() installment: any = {
    "index":"",
    "value":"",
    "date":"",
    "description":"",
    "reference":""
  };

  @Input() index: number;
  constructor() {
   

   }

  ngOnInit() {
  }

  generateDefaultItem(item){
    this.installment = {
      "index":"1",
      "value":item.value,
      "date":item.date,
      "description":item.description,
      "reference":item.reference
    };
  }

}
