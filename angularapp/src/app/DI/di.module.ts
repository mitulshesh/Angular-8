import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';


@NgModule({
    declarations:[ProductComponent],
    exports:[ProductComponent],
    imports:[FormsModule, CommonModule],
    providers: [ProductService]

    

    //custom module will never have bootstrap

})

export class DIModule{

}