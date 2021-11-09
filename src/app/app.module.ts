import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MealState } from './state/meal.state';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MealService } from './services/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AreasComponent } from './components/areas/areas.component';
import { MealsComponent } from './components/meals/meals.component';
import { ItemComponent } from './components/item/item.component';


export const components = [
  AppComponent,
  CatalogComponent,
  HeaderComponent,
  SearchComponent,
  AreasComponent,
  MealsComponent,
  ItemComponent
];

@NgModule({
  declarations: [
    ...components

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxsModule.forRoot([MealState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
