import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ng2-ui-switch/'

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecurrencesComponent } from './schedules/recurrences/recurrences.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { InstallmentsComponent } from './schedules/installments/installments.component';
import { ItemsComponent } from './schedules/installments/items/items.component';
import { BillingComponent } from './schedules/billing/billing.component';
import { InvoiceComponent } from './schedules/invoice/invoice.component';
import { HomeComponent } from './home/home.component';
import { RecurrenceEditionComponent } from './recurrence-edition/recurrence-edition.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recurrence/new', component: SchedulesComponent },
  { path: 'recurrence/edit', component: RecurrenceEditionComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecurrencesComponent,
    SchedulesComponent,
    InstallmentsComponent,
    ItemsComponent,
    BillingComponent,
    InvoiceComponent,
    HomeComponent,
    RecurrenceEditionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
