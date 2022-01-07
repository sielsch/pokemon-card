import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/card.model';


export const SEARCH_CARD = '[Catalog] Search Card'
export const SEARCH_CARD_FAILED = '[Catalog Page] Search Card Failed'
export const SEARCH_CARD_SUCCESS = '[Catalog Page] Search Card Success'


export const searchCard = createAction(
    SEARCH_CARD,
    props<{pokemonName: string}>()
);

export const searchCardSuccess = createAction(
    SEARCH_CARD_SUCCESS,
    props<{cards: Card[]}>()
);

export const searchCardFailed = createAction(
    SEARCH_CARD_FAILED,
    props<any>()
);
