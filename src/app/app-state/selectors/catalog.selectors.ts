import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatalogState } from "../reducers/catalog.reducer";

export const catalogContent = createSelector(
    createFeatureSelector('catalog'),
    (catalog: CatalogState) => catalog.cards
    )

    export const noResultFound = createSelector(
        createFeatureSelector('catalog'),
        (catalog: CatalogState ) => catalog.noResultFound
    )

    export const getError = createSelector(
        createFeatureSelector('catalog'),
        (catalog: CatalogState ) => catalog.error
    )