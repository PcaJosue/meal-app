import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { AppRoutingModule } from "src/app/app.routing.module";
import { MaterialModule } from "src/app/material.module";
import { OptionType } from "src/app/model/meal.model";
import { MealService } from "src/app/services/meal.service";
import { SearchComponent } from "../search/search.component";
import { AreasComponent } from "./areas.component";

export default {
    component: AreasComponent,
    decorators: [
        moduleMetadata({
            declarations: [AreasComponent, SearchComponent],
            imports: [MaterialModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
            providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' }],
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Areas'
} as Meta



const Template: Story<AreasComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.args = {
    type: OptionType.category
}
