import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchResultItem } from 'src/app/shared/_shared';
import { RootStoreState, SearchStoreSelectors } from 'src/app/root-store';

@Component({
  selector: 'app-google-results',
  templateUrl: './google-results.component.html',
  styleUrls: ['./google-results.component.sass'],
})
export class GoogleResultsComponent implements OnInit {
  searchResults$: Observable<SearchResultItem[]>;

  constructor(public store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.searchResults$ = this.store$.select(
      SearchStoreSelectors.selectAllItems
    );
  }
}
