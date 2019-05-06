import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  startWith,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter();

  input = new FormControl();
  valueChanges$: Subscription;

  constructor() {}

  ngOnInit() {
    this.valueChanges$ = this.input.valueChanges
      .pipe(
        startWith(''),
        debounceTime(800),
        distinctUntilChanged(),
        tap((query: string) => this.search.emit(query))
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.valueChanges$) {
      this.valueChanges$.unsubscribe();
    }
  }
}
