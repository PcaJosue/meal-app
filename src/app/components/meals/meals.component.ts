import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { images, Meal, OptionType } from 'src/app/model/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  items: any;
  type: string;
  value: string;
  constructor(private mealService: MealService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {

    console.log('route', this.route);
    this.type = this.route.snapshot.params.type;
    this.value = this.route.snapshot.params.value;

    setTimeout(async () => {

      if (this.type === OptionType.category)
        this.items = (await this.mealService.searchByCategory(this.value).toPromise<any>()).meals;
      else if (this.type === OptionType.area)
        this.items = (await this.mealService.searchByArea(this.value).toPromise<any>()).meals;
      else if (this.type === OptionType.name)
        this.items = (await this.mealService.searchByName(this.value).toPromise<any>()).meals;

      console.log('items', this.items);

    }, 100);
  }

  seeItem(item) {
    this.router.navigate([`/item/${item.strMeal}/${OptionType.category}`])
  }

}
