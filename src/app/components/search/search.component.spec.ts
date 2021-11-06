import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { Meal, OptionType } from 'src/app/model/meal.model';
import { MealService } from 'src/app/services/meal.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule],
      providers: [MealService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search categories', () => {

    spyOn(component.onSearch, 'emit');
    component.myControl.setValue('Beef');
    component.type = OptionType.category
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onSearch.emit).toHaveBeenCalled();

  })



});
