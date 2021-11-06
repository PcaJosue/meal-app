import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule],
    providers: [],
})
export class MaterialModule { }