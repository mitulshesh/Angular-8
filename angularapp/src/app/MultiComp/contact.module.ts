import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ContactDetailsComponent } from './components/contactDetails.component';
import { ContactListComponent } from './components/contactList.component';


      
@NgModule({
  imports: [ CommonModule,FormsModule],
  declarations: [
            ContactDetailsComponent,
  			ContactListComponent
  			],
  exports:[ContactListComponent]
})
export class ContactModule { }
