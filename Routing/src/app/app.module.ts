import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SPARouting } from './app.routing';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './components/login.component';
import { ContactListComponent } from './components/contactList.component';
import { ShowComponent } from './components/show.component';
import { NewContactComponent } from './components/newContact.component';
import { ServiceComponent } from './components/service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactListComponent,
    ShowComponent,
    NewContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    SPARouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
