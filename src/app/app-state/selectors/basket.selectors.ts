import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BasketState } from "../reducers/basket.reducer";


export const selectCardCounts = createSelector(
    createFeatureSelector('basket'),
    (basket: BasketState) => {
        let itemNumber = 0;
        basket.shoppingItems.forEach(basketItem => {
            itemNumber += basketItem.count;
        })
        return itemNumber;
    }
)


export const selectTotalPrice = createSelector (
    createFeatureSelector('basket'),
    (basket: BasketState) => {
        let totalPrice = 0;
        basket.shoppingItems.forEach(basketItem => {
            totalPrice+=parseFloat(basketItem.card.cardmarket.prices.trendPrice)*basketItem.count;
        })
        return totalPrice;
    }
)


export const fullBasket = createSelector(
    createFeatureSelector('basket'),
    (basket: BasketState) => basket.shoppingItems
    )

