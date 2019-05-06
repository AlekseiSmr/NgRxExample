import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { GoogleResultsComponent } from './search/components/google-results/google-results.component';
import { BingResultsComponent } from './search/components/bing-results/bing-results.component';
import { SearchBarComponent } from './search/components/search-bar/search-bar.component';
import { SearchInputComponent } from './search/components/search-bar/search-input/search-input.component';
import { SearchTypesComponent } from './search/components/search-bar/search-types/search-types.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchInputComponent,
    SearchTypesComponent,
    GoogleResultsComponent,
    BingResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
