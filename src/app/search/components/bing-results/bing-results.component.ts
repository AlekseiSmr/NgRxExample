import { Component, OnInit } from '@angular/core';
import { GoogleResultsComponent } from '../google-results/google-results.component';
import { Store } from '@ngrx/store';
import { RootStoreState, SearchStoreSelectors } from 'src/app/root-store';

@Component({
  selector: 'app-bing-results',
  templateUrl: './bing-results.component.html',
  styleUrls: ['./bing-results.component.sass'],
})
export class BingResultsComponent extends GoogleResultsComponent
  implements OnInit {
  constructor(private st$: Store<RootStoreState.State>) {
    super(st$);
  }

  ngOnInit() {
    this.searchResults$ = this.store$.select(
      SearchStoreSelectors.selectAllItems
    );
  }
}
