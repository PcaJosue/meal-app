import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    exports: [
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatMenuModule


    ],
    providers: [],
})
export class MaterialModule { }