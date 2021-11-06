export class MealStateModel {

    title: string;
    catalog: any;
    options: string[];

}

export class Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}
export enum OptionType {
    'category' = 'category',
    'area' = 'area',
    'ingredient' = 'ingredient'
}