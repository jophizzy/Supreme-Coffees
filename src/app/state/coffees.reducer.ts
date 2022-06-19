import { createReducer, on } from "@ngrx/store";
import * as coffeeActions from "./coffees.actions";
import { initialState } from "./coffees.state";


export const coffeeReducer = createReducer(
    initialState,
    on(coffeeActions.loadCoffees, (state) => {
        return {
            ...state
        }
    }),
    on(coffeeActions.storeCoffees, (state, action) => {
        // coffee = state.coffeeList;
        // coffee = action.data;
        return {
            ...state,
            coffeeList: action.data
        }
    }),
    on(coffeeActions.setCoffeeDetail, (state, action) => {
        return {
            ...state,
            coffeeDetail: action.coffee
        }
    }),
)