import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MaterialModule } from "src/app/material.module";
import { OptionType } from "src/app/model/meal.model";
import { MealService } from "src/app/services/meal.service";
import { SearchComponent } from "./search.component";

export default {
    component: SearchComponent,
    decorators: [
        moduleMetadata({
            declarations: [SearchComponent],
            imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule],
            providers: [MealService]
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Search'
} as Meta


const Template: Story<SearchComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.args = {
    options: ['Beef', 'Chicken', 'Seafood'],
    type: OptionType.category
}
