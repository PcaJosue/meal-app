import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  API = 'https://www.themealdb.com/api/json/v1/1';
  constructor(private http: HttpClient) { }


  searchByName(name) {
    return this.http.get(`${this.API}/search.php?s=${name}`)
  }

  searchById(id) {
    return this.http.get(`${this.API}/lookup.php?i=${id}`)
  }

  searchByCategory(category) {
    return this.http.get(`${this.API}/filter.php?c=${category}`)
  }

  searchByArea(area) {
    return this.http.get(`${this.API}/filter.php?a=${area}`)
  }

  searchByMainIngredient(ingredient) {
    return this.http.get(`${this.API}/filter.php?i=${ingredient}`)
  }

  searchCategories() {
    return this.http.get(`${this.API}/list.php?c=list`)
  }

  searchAreas() {
    return this.http.get(`${this.API}/list.php?a=list`)
  }

  searchIngredients() {
    return this.http.get(`${this.API}/list.php?i=list`)
  }

}
