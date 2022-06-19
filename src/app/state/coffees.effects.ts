import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concat, map, of, switchMap } from "rxjs";
import { CoffeesService } from "../services/coffees.service";
import * as coffeeActions from "./coffees.actions";

@Injectable()
export class CoffeesEffects{ 
    constructor(private action$: Actions, private coffeeService: CoffeesService) { }
    coffeeLength: number = 0;
    loadCoffees$ = createEffect(
        () => { 
            return this.action$.pipe(
                ofType(coffeeActions.loadCoffees), //action type loadcoffees
                switchMap(action => {
                    const coffeeList: any = [];
                    // for (let i = 0; i < 50; i++) {
                    //     this.coffeeLength++;
                    //     if (this.coffeeLength >= 51) { } else {
                    //         coffeeList.push(this.coffeeService.getCoffees());
                    //     }
                    // }
                    if (this.coffeeLength >= 50) { } else {
                        coffeeList.push(this.coffeeService.getCoffees());
                    }
                    return concat(...coffeeList).pipe(
                        map(data => {
                            this.coffeeLength = 50;
                            return coffeeActions.storeCoffees({ data })
                        })
                    )
                })
            )
    }, {dispatch: true})
}