import { Component } from '@angular/core';


@Component({
    selector:"app-start",
    template:'<h1 class="bg-success">{{company}} </h1>'
    
})
export class StartComponent{
    company:string
    constructor(){
        this.company="Bank of America"
    }
}