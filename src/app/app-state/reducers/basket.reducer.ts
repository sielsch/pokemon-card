import {  createReducer, on } from "@ngrx/store";
import  * as fromBasket from "../actions/basket.actions";
import { Card } from "../../models/card.model";
import * as _ from 'lodash'
import { ShoppingItem } from "src/app/models/shopping-item.model";


export const initialBasket: ShoppingItem[] = [];

export interface BasketState {
  shoppingItems: ShoppingItem[];
}

export const intialState: BasketState = {
  shoppingItems : []
}

   export const basketReducer = createReducer(
    intialState,
  on(fromBasket.add, (state, card) => addCard(state, card)),
  on(fromBasket.addOne, (state, shoppingItem) => addOne(state, shoppingItem)),
  on(fromBasket.removeOne, (state, shoppingItem) => removeOne(state, shoppingItem)),
  on(fromBasket.clearBasket, ()=>({shoppingItems : []}))
  );

  function  addCard(state: BasketState, card: Card): BasketState {
   const newState = JSON.parse(JSON.stringify(state));
    if(newState.shoppingItems.filter((item) =>  card.id==item.card.id).length>0) {
      newState.shoppingItems.find((item)=>card.id==item.card.id).count++;
    } else {
      newState.shoppingItems.push({card: card, count: 1});
    }
    return newState;
  }

  function addOne(state:BasketState, shoppingItem: ShoppingItem ) : BasketState {
    const newState: BasketState = _.cloneDeep(state);
    newState.shoppingItems.find((item) => item.card.id === shoppingItem.card.id).count++
    return newState;
  }


  function removeOne(state:BasketState, shoppingItem: ShoppingItem ) : BasketState {
    const newState: BasketState = _.cloneDeep(state);
    if(shoppingItem.count>0){
      newState.shoppingItems.find((item) => item.card.id === shoppingItem.card.id).count --
    }
    return newState;
  }