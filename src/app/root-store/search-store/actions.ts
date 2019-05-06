import { Action } from '@ngrx/store';
import { SearchResultItem } from 'src/app/shared/_shared';

export enum ActionTypes {
  BING_REQUEST = '[Search Bing] Request',
  BING_FAILURE = '[Search Bing] Failure',
  BING_SUCCESS = '[Search Bing] Success',

  GOOGLE_REQUEST = '[Search Google] Request',
  GOOGLE_FAILURE = '[Search Google] Failure',
  GOOGLE_SUCCESS = '[Search Google] Success',

  SELECT_PROVIDER = '[Select Provider] Set type',
  SELECT_PROVIDER_SUCCESS = '[Select Provider] Success',
}

/* BING */
export class BingRequestAction implements Action {
  constructor(public payload: { query: string }) {}
  readonly type = ActionTypes.BING_REQUEST;
}

export class BingFailureAction implements Action {
  constructor(public payload: { error: string }) {}
  readonly type = ActionTypes.BING_FAILURE;
}

export class BingSuccessAction implements Action {
  constructor(public payload: { items: SearchResultItem[] }) {}
  readonly type = ActionTypes.BING_SUCCESS;
}

/* GOOGLE */
export class GoogleRequestAction implements Action {
  constructor(public payload: { query: string }) {}
  readonly type = ActionTypes.GOOGLE_REQUEST;
}

export class GoogleFailureAction implements Action {
  constructor(public payload: { error: string }) {}
  readonly type = ActionTypes.GOOGLE_FAILURE;
}

export class GoogleSuccessAction implements Action {
  constructor(public payload: { items: SearchResultItem[] }) {}
  readonly type = ActionTypes.GOOGLE_SUCCESS;
}

/* PROVIDERS */
export class SelectProviderAction implements Action {
  constructor(public payload: { provider: string }) {}
  readonly type = ActionTypes.SELECT_PROVIDER;
}

export class SelectProviderSuccessAction implements Action {
  constructor() {}
  readonly type = ActionTypes.SELECT_PROVIDER_SUCCESS;
}

/* ACTIONS */
export type Actions =
  | BingRequestAction
  | BingFailureAction
  | BingSuccessAction
  | GoogleRequestAction
  | GoogleFailureAction
  | GoogleSuccessAction
  | SelectProviderAction
  | SelectProviderSuccessAction;
