import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billing: any = {
    when: "0",
    dayWhen: ""
  };
  constructor() { }

  ngOnInit() {
  }

}
