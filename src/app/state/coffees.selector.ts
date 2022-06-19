import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeesState } from "./coffees.state";

export const selectCoffeeState = createFeatureSelector<CoffeesState>(
    'coffee' //Variable name as index.ts
)

export const selectCoffees = createSelector(
    selectCoffeeState, (state: CoffeesState) => {
        return state.coffeeList;
   }
)

export const selectCoffeeDetail = createSelector(
    selectCoffeeState, (state: CoffeesState) => {
        return state.coffeeDetail;
   }
)
