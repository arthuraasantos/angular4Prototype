import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src'



import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecurrencesComponent } from './recurrences/recurrences.component';
import { SchedulesComponent } from './schedules/schedules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecurrencesComponent,
    SchedulesComponent

  ],
  imports: [
    BrowserModule,
    UiSwitchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
