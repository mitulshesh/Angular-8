import { Product } from './product';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService{

    getProduct():Product{
        return new Product(101, "iPhone8","The latest iPhone",1200.00);
    }
}