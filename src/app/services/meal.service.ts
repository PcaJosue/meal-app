import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  API = 'https://www.themealdb.com/api/json/v1/1';
  constructor(private http: HttpClient) { }


  searchByCategory(category) {
    return this.http.get(`${this.API}/filter.php?c=${category}`)
  }

  searchByArea(area) {
    return this.http.get(`${this.API}/filter.php?a=${area}`)
  }

  searchByMainIngredient(ingredient) {
    return this.http.get(`${this.API}/filter.php?i=${ingredient}`)
  }


}
