import { Selector, State } from "@ngxs/store";
import { MealStateModel } from "../model/meal.model";


@State<MealStateModel>({
    name: 'meals',
    defaults: {
        title: 'Meal App',
        catalog: null,
        options: []
    }
})
export class MealState {
    @Selector()
    static title(state: MealStateModel) {
        return state.title;
    }
}