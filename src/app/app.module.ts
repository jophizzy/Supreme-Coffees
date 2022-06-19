import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeItemComponent } from './components/coffee-item/coffee-item.component';
import { coffeeReducer } from './state/coffees.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoffeesEffects } from './state/coffees.effects';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CoffeesComponent,
    FooterComponent,
    BannerComponent,
    CoffeeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    EffectsModule.forRoot([CoffeesEffects]),
    StoreModule.forRoot({ coffee: coffeeReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
