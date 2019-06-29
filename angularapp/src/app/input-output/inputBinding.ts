import {Component } from '@angular/core';
//StockComponent
@Component({
    selector: 'app-stock',
    template: `
    <div class="text-left">
    <h1 class="bg-info">Stock Exchange</h1>
    <input type="text"  placeholder="Enter stock (eg: BOA)"  
      (change)="onInputEvent($event)"/>
    <br/>   
    
    <div>Stock Info :{{stock}}</div>
    
    <order-processor  [stockSymbol]="stock" quantity="100">
       </order-processor>
</div>

     <timer-comp></timer-comp>
  `
})


export class StockComponent{
    stock:any;

    //this is event.target in javascript
    onInputEvent({target}:any):void{
        this.stock = target.value;
    }


}