import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add } from '../app-state/actions/basket.actions';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';
import * as fromCatalogActions from '../app-state/actions/catalog.actions'
import * as catalogSelectors from '../app-state/selectors/catalog.selectors';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  cards$: Observable<Card[]>;

  noResultFound$: Observable<boolean>

  error$: Observable<Error>

  pokemonForm: FormGroup;
  
  constructor(private _cardService: CardService, private store: Store) {
    this.pokemonForm = new FormGroup({
      name: new FormControl('')
    });

    this.cards$ = this.store.select(catalogSelectors.catalogContent);
    this.noResultFound$ = this.store.select(catalogSelectors.noResultFound);
    this.error$ = this.store.select(catalogSelectors.getError);
   }



  ngOnInit(): void {
  
  }

  addToBasket(card: Card){
    this.store.dispatch(add(card))
  }

  searchPokemon() {
    this.store.dispatch(fromCatalogActions.searchCard({pokemonName: this.pokemonForm.get('name').value}))
  }

}
