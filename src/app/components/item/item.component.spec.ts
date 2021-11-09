import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { components } from 'src/app/app.module';
import { routes } from 'src/app/app.routing.module';
import { MaterialModule } from 'src/app/material.module';
import { MealService } from 'src/app/services/meal.service';
import { ItemComponent } from './item.component';


describe('Item component', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [...components],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes), MaterialModule, ReactiveFormsModule,],
      providers: [MealService, { provide: APP_BASE_HREF, useValue: '#' },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: {
                id: '52772'
              }
            }
          }
        }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});