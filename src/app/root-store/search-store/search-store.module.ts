import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchStoreEffects as SearchStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('search', featureReducer),
    EffectsModule.forFeature([SearchStoreEffects]),
  ],
  providers: [SearchStoreEffects],
})
export class SearchStoreModule {}
