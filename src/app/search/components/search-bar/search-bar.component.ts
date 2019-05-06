import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, SearchStoreSelectors } from 'src/app/root-store';
import {
  GoogleRequestAction,
  BingRequestAction,
  SelectProviderAction,
} from 'src/app/root-store/search-store/actions';
import { SearchTypeEnum } from 'src/app/shared/_shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  searchType: SearchTypeEnum = SearchTypeEnum.Bing;
  selectedProvider$: Observable<string>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.selectedProvider$ = this.store$.select(
      SearchStoreSelectors.selectProvider
    );
  }

  onSearch(searchQuery: string) {
    if (searchQuery === '') {
      return;
    }

    switch (this.searchType) {
      case SearchTypeEnum.Bing:
        this.store$.dispatch(new BingRequestAction({ query: searchQuery }));
        break;

      case SearchTypeEnum.Google:
        this.store$.dispatch(new GoogleRequestAction({ query: searchQuery }));
        break;
    }
  }

  onTypeSelect(searchType: SearchTypeEnum) {
    this.store$.dispatch(new SelectProviderAction({ provider: searchType }));
  }
}
