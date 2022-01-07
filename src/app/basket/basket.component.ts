import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fullBasket } from '../app-state/selectors/basket.selectors';
import * as fromBasketActions from '../app-state/actions/basket.actions';
import { ShoppingItem } from '../models/shopping-item.model';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket$ : Observable<ShoppingItem[]>
  isEmpty=true;

  constructor(private store :Store) {
    this.basket$ = this.store.select(fullBasket);
   }

  ngOnInit(): void {
    this.store.select(fullBasket).subscribe((res)=> { this.isEmpty = res.length===0})
  }


  addOne(shoppingItem: ShoppingItem):void {
    this.store.dispatch(fromBasketActions.addOne(shoppingItem))
  }

  removeOne(shoppingItem: ShoppingItem): void {
    this.store.dispatch(fromBasketActions.removeOne(shoppingItem))
  }

}
