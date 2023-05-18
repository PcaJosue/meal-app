import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { images, Meal, OptionType } from 'src/app/model/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Meal[];
  constructor(private mealService: MealService, private router: Router) { }
  async ngOnInit() {
      this.items = (await this.mealService.searchCategories().toPromise<any>()).meals?.map(meal => (
        {
          idMeal: null,
          strMeal: meal.strCategory,
          strMealThumb: images[meal.strCategory]
        }
      ));
  }

  seeItem(item) {
    this.router.navigate([`/items/${item.strMeal}/${OptionType.category}`])
  }



}
