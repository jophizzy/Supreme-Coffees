import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { selectCoffeeDetail } from 'src/app/state/coffees.selector';


@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {

  detail: any;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    
    this.store.select(selectCoffeeDetail).pipe().subscribe((result) => {
      this.detail = result;
      if (!this.detail.id) {
        this.router.navigateByUrl('/coffees')
      }
    })
  
  }

}
