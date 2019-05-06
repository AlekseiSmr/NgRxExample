import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleResultsComponent } from './search/components/google-results/google-results.component';
import { BingResultsComponent } from './search/components/bing-results/bing-results.component';

const routes: Routes = [
  {
    path: 'bing',
    component: BingResultsComponent,
  },
  {
    path: 'google',
    component: GoogleResultsComponent,
  },
  {
    path: '',
    redirectTo: 'bing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
