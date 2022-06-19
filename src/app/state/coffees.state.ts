import { Coffee } from "../Coffee";

export interface CoffeesState{
    coffeeList: Coffee[];
    coffeeDetail: Coffee;
}

export const initialState: CoffeesState = {
    coffeeList: [],
    coffeeDetail: {
        id: null,
        uid: "",
        blend_name: "",
        origin: "",
        variety: "",
        notes: "",
        intensifier: "",
    }
}