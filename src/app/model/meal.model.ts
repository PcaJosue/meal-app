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
    'ingredient' = 'ingredient',
    'name' = 'name'
}


export const images = {
    'Beef': 'Beef.jpeg',
    'Breakfast': 'Breakfast.jpg',
    'Chicken': 'Chicken.jfif',
    'Dessert': 'Dessert.jfif',
    "Goat": 'Goat.jpeg',
    "Lamb": 'Lamb.jfif',
    "Miscellaneous": 'Miscellaneous.jpg',
    'Pasta': 'Pasta.jfif',
    'Pork': 'Pork.jpg',
    'Seafood': 'Seafood.jpg',
    'Side': 'Side.jpg',
    'Starter': 'Starter.jfif',
    'Vegan': 'Vegan.jfif',
    'Vegetarian': 'Vegetarian.jfif'
}