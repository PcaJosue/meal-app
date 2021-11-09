import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { AppRoutingModule } from "src/app/app.routing.module";
import { MaterialModule } from "src/app/material.module";
import { MealService } from "src/app/services/meal.service";
import { MealState } from "src/app/state/meal.state";
import { ItemComponent } from "./item.component";

export default {
    component: ItemComponent,
    decorators: [
        moduleMetadata({
            declarations: [ItemComponent],
            imports: [MaterialModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
            providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' }, {
                provide: ActivatedRoute, useValue: {
                    snapshot: {
                        params: {
                            id: '52772',
                        }
                    }
                }
            }],
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Item'
} as Meta



const Template: Story<ItemComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.parameters = {
    angularRouter: { active: '/item/52772' }
};


