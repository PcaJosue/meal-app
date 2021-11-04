import { Selector, State } from "@ngxs/store";

export class MealStateModel {

    title: string;
    catalog: any;

}


@State<MealStateModel>({
    name: 'meals',
    defaults: {
        title: 'Meal App',
        catalog: null
    }
})
export class MealState {
    @Selector()
    static title(state: MealStateModel) {
        return state.title;
    }
}