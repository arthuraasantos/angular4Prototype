import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedules-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billing: any = {
    when: "0",
    dayWhen: "10"
  };

  @Input() recurrenceEnabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clearDayWhen(){
    this.billing.dayWhen = null;
  }

}
