import {
    Component,Input,OnInit,OnChanges,DoCheck,OnDestroy,ChangeDetectorRef,SimpleChanges} from '@angular/core'
    @Component({
        selector: 'app-lifecycle',
        template: `
          <h1 class="container">Google Search:
              <input type="text" [(ngModel)]="search">
           </h1>
      
          <child [search]="search"></child>
        `
      })
      export class CompLifeCycleComponent {
        search: string = 'computers';
      }

@Component({
        selector: 'child',
        template: `
        <h1 class='text-danger container' id="txt">Search Text</h1>
        <div class='container'>
         <h3 class='text-primary'>{{search}}</h3>   
        </div>
          `
      })

      export class ChildComponent implements OnInit,OnChanges,DoCheck,OnDestroy{
          @Input()
          search:string;
          constructor(public cd:ChangeDetectorRef){

            console.log(`constructor: ${this.search}`)

           //dont change the state of the components
            this.cd.detach();
          }

          //called only once //shawdow DOM
          ngOnInit():void{
            //invoke service method to get initial data  
            console.log(`ngoninit: ${this.search}`)

          /*setTimeout(()=>{
                this.cd.reattach()},5000); */
            }
           

          //shawdow DOM  //model validation
          ngOnChanges(changes: SimpleChanges):void {
            // validations,logging
            for (let key in changes) {
              console.log(`${key} changed. 
                                 Current: ${changes[key].currentValue}.
                                 Previous: ${changes[key].previousValue}`);
                     }    
           // invoke service method to handle changes - model validation
            console.log(`ngOnChanges: ${this.search}`);     
            // ajax call to service to get live data 
            //var searchdata=http.get(url+"?q="+search)  
          }  

          //shawdow DOM //Change detection strategry best place
          ngDoCheck(){
              console.log("ngDoCheck- Change Detection Startergy");

              if(this.search.length==10){
                  this.cd.detectChanges();
              }
          }

          //DOm ready, can use jquery
          ngAfterViewChecked(){
            console.log("h1 tag text::"+ document.getElementById("txt").innerText)
          }

         //invoked only once
          ngOnDestroy(){
              console.log("Destroyed");
          }

      }