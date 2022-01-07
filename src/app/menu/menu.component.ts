import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearBasket } from '../app-state/actions/basket.actions';
import { selectCardCounts, selectTotalPrice } from '../app-state/selectors/basket.selectors';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  cardsCount$: Observable<number>;
  totalPrice$: Observable<number>;

  cards = [];

  constructor(private _cardService: CardService, private store: Store) { 
    this.cardsCount$ = this.store.select(selectCardCounts);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

  ngOnInit(): void {
  }


  clearBasket(): void {
    this.store.dispatch(clearBasket());
  }

}
