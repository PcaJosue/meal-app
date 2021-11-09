import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OptionType } from 'src/app/model/meal.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  search() {
    this.router.navigate(['/items', this.myControl.value, OptionType.name]);
  }


}
