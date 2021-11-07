import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { images, Meal, OptionType } from 'src/app/model/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  items: Meal[];
  constructor(private mealService: MealService, private router: Router) { }
  ngOnInit(): void {
    setTimeout(async () => {
      this.items = (await this.mealService.searchAreas().toPromise<any>()).meals?.map(meal => (
        {
          idMeal: null,
          strMeal: meal.strArea,
          strMealThumb: images[meal.strArea]
        }
      ));
    }, 100);
  }

  seeItem(item) {
    this.router.navigate([`/items/${item.strMeal}/${OptionType.area}`])
  }


}
