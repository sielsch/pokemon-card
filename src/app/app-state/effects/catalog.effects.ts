import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CardService } from "src/app/services/card.service";
import * as catalogActions from  "../actions/catalog.actions";

@Injectable()
export class CatalogEffects {

constructor(
    private actions$: Actions,
    private cardService: CardService
) {}


searchCard$ = 
createEffect(() => 
    this.actions$.pipe(
        ofType(catalogActions.searchCard),
        exhaustMap(action => {
            return this.cardService.searchWithName(action.pokemonName).pipe(
            map(response => {
               return catalogActions.searchCardSuccess({cards: response.data});
            }),
            catchError((error: HttpErrorResponse) => {
                return of(catalogActions.searchCardFailed(error.error))
            } )
        )
    })
)
);

}
