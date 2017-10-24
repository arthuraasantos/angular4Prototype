import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules-installments',
  templateUrl: './installments.component.html',
  styleUrls: ['./installments.component.css']
})
export class InstallmentsComponent implements OnInit {
  installmentsQuantity: number = 0;
  arrayQuantity: any = [1];

  constructor() { }

  ngOnInit() {
  }


  generateInstallmentsItems(){
    console.log("passou");
    this.arrayQuantity = new Array();
    for(var x = 0; x < this.installmentsQuantity; x++){
      this.arrayQuantity.push(1);
    }
    
  }

}
