import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billing: any = {
    when: "1",
    dayWhen: null
  };

  teste: number = 0;
  constructor() { }

  ngOnInit() {
  }

  clearDayWhen(){
    this.billing.dayWhen = null;
  }

}
