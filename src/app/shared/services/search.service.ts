import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResultItem } from '../models/search-result-item.model';

const Results: SearchResultItem[] = [
  {
    id: 0,
    title: 'Title 1',
    content: 'Text 1',
  },
  {
    id: 1,
    title: 'Title 2',
    content: 'Text 2',
  },
  {
    id: 2,
    title: 'Title 3',
    content: 'Text 3',
  },
];

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  public searchBing(query: string): Observable<SearchResultItem[]> {
    return new Observable(observer => {
      console.log('Search Bing executed!');

      observer.next(Results);
      observer.complete();
    });
  }

  public searchGoogle(query: string): Observable<SearchResultItem[]> {
    return new Observable(observer => {
      console.log('Search Google executed!');

      observer.next(Results);
      observer.complete();
    });
  }
}
