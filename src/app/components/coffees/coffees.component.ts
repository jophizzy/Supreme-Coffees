import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Coffee } from 'src/app/Coffee';
import { AppState } from 'src/app/state';
import { loadCoffees, setCoffeeDetail } from 'src/app/state/coffees.actions';
import { selectCoffees } from 'src/app/state/coffees.selector';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.scss']
})
export class CoffeesComponent implements OnInit {
  coffees: any;
  page: any = 1;
  count: any = 10;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  setCoffeeDetail(coffee: Coffee) {
    this.store.dispatch(setCoffeeDetail({ coffee }));
    this.router.navigateByUrl('/coffees/detail')
  }

  ngOnInit(): void {

    setTimeout(() => {
      document.getElementById('preloader-spin')?.classList.add('hidden')
    }, 200);

    this.store.dispatch(loadCoffees());

    this.store.select(selectCoffees).pipe().subscribe((result) => {
      this.coffees = result;
    })

  }
  
}
