import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ng2-ui-switch/'

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecurrencesComponent } from './recurrences/recurrences.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { InstallmentsComponent } from './installments/installments.component';
import { ItemsComponent } from './installments/items/items.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'schedules/new', component: SchedulesComponent },
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
    ItemsComponent
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
