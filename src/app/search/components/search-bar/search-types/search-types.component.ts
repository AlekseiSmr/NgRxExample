import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchTypeEnum } from 'src/app/shared/_shared';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-types',
  templateUrl: './search-types.component.html',
  styleUrls: ['./search-types.component.sass'],
})
export class SearchTypesComponent implements OnInit, OnDestroy {
  @Input() selected$: Observable<SearchTypeEnum> = null;
  @Output() typeSelect: EventEmitter<SearchTypeEnum> = new EventEmitter();

  sub$: Subscription;

  form = this.fb.group({
    searchType: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sub$ = this.selected$.subscribe(provider =>
      this.form.get('searchType').patchValue(provider)
    );
  }

  ngOnDestroy() {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }

  onCheck(value: string) {
    this.typeSelect.emit(value as SearchTypeEnum);
  }
}
