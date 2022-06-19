import { ActionReducerMap } from "@ngrx/store";
import { CoffeesState } from "./coffees.state";
import { coffeeReducer } from "./coffees.reducer";

export interface AppState {
    coffee : CoffeesState
}

export const reducers: ActionReducerMap<AppState> = {coffee : coffeeReducer}