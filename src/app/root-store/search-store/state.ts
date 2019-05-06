import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResultItem, SearchTypeEnum } from 'src/app/shared/_shared';

export const featureAdapter: EntityAdapter<
  SearchResultItem
> = createEntityAdapter<SearchResultItem>({
  selectId: model => model.id,
  sortComparer: (a: SearchResultItem, b: SearchResultItem): number => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id === b.id) {
      return 0;
    } else if (a.id > b.id) {
      return 1;
    }
  },
});

export interface State extends EntityState<SearchResultItem> {
  provider: string;
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  provider: SearchTypeEnum.Bing,
  isLoading: false,
  error: null,
});
