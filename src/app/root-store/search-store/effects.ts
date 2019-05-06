import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of as observableOf } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  exhaustMap,
  startWith,
} from 'rxjs/operators';

import * as featureActions from './actions';
import { SearchService, SearchTypeEnum } from 'src/app/shared/_shared';

@Injectable()
export class SearchStoreEffects {
  constructor(
    private searchService: SearchService,
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect()
  bingRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.BingRequestAction>(
      featureActions.ActionTypes.BING_REQUEST
    ),
    switchMap(action =>
      this.searchService.searchBing(action.payload.query).pipe(
        map(items => {
          return new featureActions.BingSuccessAction({ items });
        }),
        catchError(error =>
          observableOf(new featureActions.BingFailureAction({ error }))
        )
      )
    )
  );

  @Effect()
  googleRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.GoogleRequestAction>(
      featureActions.ActionTypes.GOOGLE_REQUEST
    ),
    switchMap(action =>
      this.searchService.searchGoogle(action.payload.query).pipe(
        map(items => {
          return new featureActions.GoogleSuccessAction({ items });
        }),
        catchError(error =>
          observableOf(new featureActions.GoogleFailureAction({ error }))
        )
      )
    )
  );

  @Effect()
  selectProvider$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.SelectProviderAction>(
      featureActions.ActionTypes.SELECT_PROVIDER
    ),
    startWith(
      new featureActions.SelectProviderAction({ provider: SearchTypeEnum.Bing })
    ),
    exhaustMap(action =>
      this.router.navigate(['/', action.payload.provider.toLowerCase()])
    ),
    map(() => new featureActions.SelectProviderSuccessAction())
  );
}
