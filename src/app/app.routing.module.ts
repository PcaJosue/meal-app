import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CatalogComponent } from './components/catalog/catalog.component';

const routes: Routes = [
    { path: 'categories', component: CatalogComponent },
    { path: 'areas', component: CatalogComponent },
    { path: 'items/:value/:type', component: CatalogComponent },
    { path: 'item/:value', component: CatalogComponent },
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }