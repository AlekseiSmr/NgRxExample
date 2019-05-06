import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
  Selector,
} from '@ngrx/store';

import { featureAdapter, State } from './state';
import { SearchResultItem } from 'src/app/shared/_shared';

export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const getCount = (state: State): number => state.ids.length;
export const getProvider = (state: State): string => state.provider;

export const selectState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('search');

export const selectAllItems: (
  state: object
) => SearchResultItem[] = featureAdapter.getSelectors(selectState).selectAll;

export const selectProvider: Selector<object, string> = createSelector(
  selectState,
  getProvider
);

export const selectFeatureCount: MemoizedSelector<
  object,
  number
> = createSelector(
  selectState,
  getCount
);

export const selectById = (id: number) =>
  createSelector(
    featureAdapter.getSelectors(selectState).selectAll,
    (all: SearchResultItem[]) => {
      if (all && all.length > 0) {
        return all.find(p => p.id === id) || null;
      }
      return null;
    }
  );

export const select = () =>
  createSelector(
    featureAdapter.getSelectors(selectState).selectAll,
    (all: SearchResultItem[]) => {
      return all;
    }
  );

export const selectError: MemoizedSelector<object, any> = createSelector(
  selectState,
  getError
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectState,
  getIsLoading
);
