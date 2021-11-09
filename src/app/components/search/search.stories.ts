import { APP_BASE_HREF } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { AppRoutingModule, routes } from "src/app/app.routing.module";
import { MaterialModule } from "src/app/material.module";
import { SearchComponent } from "./search.component";

export default {
    component: SearchComponent,
    decorators: [
        moduleMetadata({
            declarations: [SearchComponent],
            imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule.withRoutes(routes)],
            providers: [{ provide: APP_BASE_HREF, useValue: '#' }]
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Search'
} as Meta


const Template: Story<SearchComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.args = {}
