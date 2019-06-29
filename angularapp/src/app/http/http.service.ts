import {debounceTime, filter,map,switchMap} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';


//confiure headers
const httpOptions={
    headers:new HttpHeaders(
        {'Content-type':'application/json'}
    )
};

@Injectable({providedIn:'root'})
export class HttpService{
    constructor(private http:HttpClient){
        console.log("http Clinet injected");
    }

    base_url= 'http://localhost:3000';

    getFoods():any{
        return this.http.get(this.base_url+'/api/food')
        .pipe(debounceTime(5000))
        .pipe(filter(response=>response!=undefined))
        .pipe(map((response:any)=>{
            console.log(response);
            return response;
        }))
    }

    createFood(food):any{
        let body = JSON.stringify(food);
        return this.http.post(this.base_url+'/api/food/',body,httpOptions);
    }

    
    updateFood(food):any{
        let body = JSON.stringify(food);
        return this.http.put(this.base_url+'/api/food/'+food.id,body,httpOptions);
    }

    deleteFood(food):any{
        return this.http.delete(this.base_url+'/api/food/'+ food.id);
    }

}