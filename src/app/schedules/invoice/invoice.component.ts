import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: any =  {
      sendWhen: "1"
  }
  constructor() { }

  ngOnInit() {
  }

}
