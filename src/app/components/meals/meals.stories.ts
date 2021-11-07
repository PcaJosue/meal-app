import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { AppRoutingModule } from "src/app/app.routing.module";
import { MaterialModule } from "src/app/material.module";
import { MealService } from "src/app/services/meal.service";
import { SearchComponent } from "../search/search.component";
import { MealsComponent } from "./meals.component";

export default {
    component: MealsComponent,
    decorators: [
        moduleMetadata({
            declarations: [MealsComponent, SearchComponent],
            imports: [MaterialModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
            providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' }, {
                provide: ActivatedRoute, useValue: {
                    snapshot: {
                        params: {
                            type: 'category',
                            value: 'beef'
                        }
                    }
                }
            }],
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Meals'
} as Meta



const Template: Story<MealsComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.parameters = {
    angularRouter: { active: '/items/Beef/category' }
};