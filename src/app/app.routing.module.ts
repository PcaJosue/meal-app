import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AreasComponent } from './components/areas/areas.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ItemComponent } from './components/item/item.component';
import { MealsComponent } from './components/meals/meals.component';

export const routes: Routes = [
    { path: 'categories', component: CatalogComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'items/:value/:type', component: MealsComponent },
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }