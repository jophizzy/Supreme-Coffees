import { createAction, props } from '@ngrx/store';
import { Coffee } from '../Coffee';

export const loadCoffees = createAction('[Coffee Listings] loadcoffee');

export const storeCoffees = createAction('[Coffee Listings] storeCoffee', props<{ data: any }>());

export const setCoffeeDetail = createAction('[Coffee Listings] setCoffeeDetail', props<{ coffee: Coffee }>());