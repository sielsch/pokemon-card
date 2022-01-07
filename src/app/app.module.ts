import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketComponent } from './basket/basket.component';
import { MenuComponent } from './menu/menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import {  HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';
import { basketReducer } from './app-state/reducers/basket.reducer';
import { catalogReducer } from './app-state/reducers/catalog.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffects } from './app-state/effects/catalog.effects';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    MenuComponent,
    CatalogComponent,
    
  ],
  imports: [
    StoreModule.forRoot({basket: basketReducer, catalog: catalogReducer}),
    EffectsModule.forRoot([CatalogEffects]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
