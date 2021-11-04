import { HeaderComponent } from "./header.component";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MaterialModule } from "src/app/material.module";

export default {
    component: HeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [HeaderComponent],
            imports: [MaterialModule],
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Header'
} as Meta


const Template: Story<HeaderComponent> = args => ({
    props: { ...args }
})

export const Main = Template.bind({});
Main.args = {
    title: 'Meal App'
}

export const Beef = Template.bind({});
Beef.args = {
    title: 'Beef'
}

export const Spicy = Template.bind({});
Spicy.args = {
    title: 'Spicy Arrabian Penne'
}

