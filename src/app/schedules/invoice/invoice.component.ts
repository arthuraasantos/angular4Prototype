import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedules-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: any =  {
      sendWhen: "1"
  }

  @Input() billingEnabled: boolean = false;
  @Input() recurrenceEnabled: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
