import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { SettingPriceComponent } from './views/setting-price/setting-price.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'setting-price', component: SettingPriceComponent },
  {
    path: '',
    redirectTo: '/setting-price',
    pathMatch: 'full'
  },
  // { path: 'season/:id', component: SeasonComponent },
  // {
  //   path: 'price-chart',
  //   component: PriceChartComponent,
  //   data: { title: '요금표' }
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingPriceComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
