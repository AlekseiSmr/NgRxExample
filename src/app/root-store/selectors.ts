import { createSelector, MemoizedSelector } from '@ngrx/store';
import { SearchStoreSelectors } from './search-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  SearchStoreSelectors.selectError,
  (error: string) => {
    return error;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  SearchStoreSelectors.selectIsLoading,
  (item: boolean) => {
    return item;
  }
);
