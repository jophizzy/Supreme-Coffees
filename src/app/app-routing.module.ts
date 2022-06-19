import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { CoffeeItemComponent } from './components/coffee-item/coffee-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'coffees',
    component: CoffeesComponent
  },
  {
    path: 'coffees/detail',
    component: CoffeeItemComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
