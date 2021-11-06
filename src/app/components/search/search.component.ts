import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Meal, OptionType } from 'src/app/model/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  @Input('type') type: string;
  @Input('options') options: string[];
  @Output('onSearch') onSearch = new EventEmitter<Meal[]>();
  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  async search() {
    let list;
    switch (this.type) {
      case OptionType.category:
        list = await this.mealService.searchByCategory(this.myControl.value).toPromise();
        break;
      case OptionType.area:
        list = await this.mealService.searchByArea(this.myControl.value).toPromise();
        break;
      case OptionType.ingredient:
        list = await this.mealService.searchByMainIngredient(this.myControl.value).toPromise();
        break;
      default:
        list = null;
        break;
    }

    this.onSearch.emit(list.meals);

  }

  private _filter(value: string): string[] {
    if (value?.length > 2) {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    } else return null
  }

}
