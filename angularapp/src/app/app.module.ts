import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { BindingComponent } from './binding/binding.component';
import { StartComponent } from './start/start.component';
import { IOModule } from './input-output/io.module';
import { DIModule } from './DI/di.module';
import { ChildComponent, CompLifeCycleComponent } from './life-cycle/lifeCycle.component';
import { ContactModule } from './MultiComp/contact.module';
import {HttpClientModule} from '@angular/common/http'
import { HttpComponent } from './http/http.component';
import {ReactiveFormsModule} from '@angular/forms'   //uses Rxjs library
import { WeatherComponent } from './http/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InvoiceComponent,
    BindingComponent,
    ChildComponent,
    CompLifeCycleComponent,
    HttpComponent,
    WeatherComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    IOModule,
    DIModule,
    ContactModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
