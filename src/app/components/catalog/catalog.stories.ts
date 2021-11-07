import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute } from "@angular/router";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { AppRoutingModule } from "src/app/app.routing.module";
import { MaterialModule } from "src/app/material.module";
import { OptionType } from "src/app/model/meal.model";
import { MealService } from "src/app/services/meal.service";
import { SearchComponent } from "../search/search.component";
import { CatalogComponent } from "./catalog.component";

export default {
    component: CatalogComponent,
    decorators: [
        moduleMetadata({
            declarations: [CatalogComponent, SearchComponent],
            imports: [MaterialModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
            providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' }],
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Catalog'
} as Meta



const Template: Story<CatalogComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.args = {
    type: OptionType.category
}
