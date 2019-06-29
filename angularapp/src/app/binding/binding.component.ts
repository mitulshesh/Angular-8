import { Component } from '@angular/core';

@Component({
    selector:"app-binding",
    templateUrl:'./binding.component.html'
})

export class BindingComponent{
    public clicked=false;
    titleStyle:string='Indigo';
    buttonStatus:boolean=true;
    company:string="Mitul Infotech";
    username:any="Mitul";
    message:string

    //json collection
    items:any = [
        {name : "Kendo UI"},
        {name:"Ext JS"},
        {name:"Angular JS"},
        {name:"React JS"}
    ];

    public clickedItem:any = {name:''};

    //method event handlers
    onItemClicked(item:any){
        this.clickedItem=item;
        this.clicked=true;
        this.buttonStatus=false
    }

    save(event:any):void{
        alert("ok. thanks for enroilling");
        this.buttonStatus=true;
    }
}

