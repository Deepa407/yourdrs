import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleanappointmentComponent } from './scheduleanappointment/scheduleanappointment.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PhoneMaskDirective } from './scheduleanappointment/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,

    ScheduleanappointmentComponent,
    PhoneMaskDirective

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    //BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
