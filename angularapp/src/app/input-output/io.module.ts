import { NgModule } from "@angular/core";
import { OrderComponent } from './order.component';
import { SMSComponent } from './sms.component';
import { TimerComponent } from './timer.component';
import { StockComponent } from './inputBinding';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OutputComponent, MailComponent, PriceQuoterComponent } from './outputBinding';

@NgModule({
    declarations:[
        OrderComponent,SMSComponent,TimerComponent,StockComponent,
        PriceQuoterComponent, OutputComponent,MailComponent
    ],

    exports:[
        StockComponent,
        OutputComponent
       
    ],

    imports:[
        CommonModule, FormsModule
    ]

    

    //custom module will never have bootstrap

})

export class IOModule{

}