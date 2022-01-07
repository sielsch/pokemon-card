import {  createReducer, on } from "@ngrx/store";
import { searchCard, searchCardFailed, searchCardSuccess } from "../actions/catalog.actions";
import { Card } from "../../models/card.model";
import * as _ from 'lodash'

export interface CatalogState {
    cards: Card[];
    noResultFound?: boolean;
    isLoading?: boolean;
    error: Error
  }



  export const initialState: CatalogState = {
    cards: [],
    noResultFound: false,
    isLoading: false,
    error: null
  };
  
  export const catalogReducer = createReducer(
    initialState,
    on(searchCard, state => {
      return {...state, isLoading: true, noResultFound: false}
    }),
    on(searchCardSuccess, (state, {cards}) => {
      return {...state, error: null, cards: cards, noResultFound:cards.length===0}
    }),
    on(searchCardFailed, (state, {error}) => {
      return {...state, error: error}
    })
  );
  