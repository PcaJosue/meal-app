import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: any;
  ingredients: any = [];
  id: string;
  instructions: string[] = [];
  constructor(private mealService: MealService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    setTimeout(async () => {
      this.item = (await this.mealService.searchById(this.id).toPromise<any>()).meals[0];
      let i = 1;
      while (this.item[`strIngredient${i}`]) {
        this.ingredients.push({ ingredient: this.item[`strIngredient${i}`], measure: this.item[`strMeasure${i}`] })
        i++;
      }

    }, 100);
  }

}
