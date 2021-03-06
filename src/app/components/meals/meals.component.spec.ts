import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { components } from 'src/app/app.module';
import { routes } from 'src/app/app.routing.module';
import { MaterialModule } from 'src/app/material.module';
import { MealService } from 'src/app/services/meal.service';
import { MealState } from 'src/app/state/meal.state';

import { MealsComponent } from './meals.component';

describe('MealsComponent', () => {
  let component: MealsComponent;
  let fixture: ComponentFixture<MealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [...components],
      imports: [MaterialModule, BrowserAnimationsModule, HttpClientModule, RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' }, {
        provide: ActivatedRoute, useValue: {
          snapshot: {
            params: {
              type: 'name',
              value: 'beef'
            }
          }
        }
      }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
