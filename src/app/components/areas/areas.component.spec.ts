import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { MealService } from 'src/app/services/meal.service';
import { SearchComponent } from '../search/search.component';
import { RouterTestingModule } from "@angular/router/testing";

import { AreasComponent } from './areas.component';
import { AppRoutingModule, routes } from 'src/app/app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { components } from 'src/app/app.module';
import { MealState } from 'src/app/state/meal.state';
import { NgxsModule } from '@ngxs/store';

describe('AreasComponent', () => {
  let component: AreasComponent;
  let fixture: ComponentFixture<AreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [...components],
      imports: [MaterialModule, BrowserAnimationsModule, NgxsModule.forRoot([MealState]), HttpClientModule, RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' }, {
        provide: ActivatedRoute, useValue: {
          snapshot: {
            params: {
              type: 'category',
              value: 'beef'
            }
          }
        }
      }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
