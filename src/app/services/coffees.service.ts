import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable} from "rxjs";
import { Coffee } from "../Coffee";
@Injectable({
    providedIn: 'root',
})
export class CoffeesService { 
    constructor(private http: HttpClient) { }
    
    getCoffees(): Observable<Coffee[]> {
        return this.http
            .get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=50')
            .pipe(
                map((data) => {
                    const coffee: Coffee[] = data;
                    return coffee;
                })
            );
    }
}