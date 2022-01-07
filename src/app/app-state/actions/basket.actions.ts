import { createAction, props } from "@ngrx/store";
import { ShoppingItem } from "src/app/models/shopping-item.model";
import { Card } from "../../models/card.model";

export const ADD_TO_BASKET = '[Basket] Add to basket'
export const REMOVE_FROM_BASKET = '[Basket] Remove from basket'
export const CLEAR_BASKET = '[Basket] Clear'
export const ADD_ONE = '[Basket] Add one'
export const REMOVE_ONE = '[Basket] Remove one'

export const add = createAction(
    ADD_TO_BASKET,
    props<Card>()
);


export const remove = createAction(
    REMOVE_FROM_BASKET,
    props<{card: Card}>()
);

export const clearBasket = createAction(
    CLEAR_BASKET
)

export const addOne = createAction(
    ADD_ONE,
    props<ShoppingItem>()
)

export const removeOne = createAction(
    REMOVE_ONE,
    props<ShoppingItem>()
)