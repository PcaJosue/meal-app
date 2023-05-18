# Angular Application

This Angular application is designed to showcase the functionality provided by the MealDB API. The application utilizes various API methods to retrieve meal data and display it to the users.

## API Functionality

The MealDB API offers the following methods:

1. **Search meal by name**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
   - Description: Retrieves meals matching the provided name.

2. **List all meals by first letter**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/search.php?f=a`
   - Description: Retrieves a list of meals starting with the specified letter.

3. **Lookup full meal details by ID**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
   - Description: Retrieves detailed information about a meal based on its ID.

4. **Lookup a single random meal**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/random.php`
   - Description: Retrieves a randomly selected meal.

5. **List all meal categories**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/categories.php`
   - Description: Retrieves a list of all meal categories.

6. **Latest Meals**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/latest.php`
   - Description: Retrieves the latest meals available.

7. **List all Categories, Area, Ingredients**
   - Method: `GET`
   - URLs:
     - `www.themealdb.com/api/json/v1/1/list.php?c=list`
     - `www.themealdb.com/api/json/v1/1/list.php?a=list`
     - `www.themealdb.com/api/json/v1/1/list.php?i=list`
   - Description: Retrieves lists of all meal categories, areas, and ingredients.

8. **Filter by main ingredient**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
   - Description: Retrieves meals that contain the specified main ingredient.

9. **Filter by Category**
   - Method: `GET`
   - URL: `www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
   - Description: Retrieves meals belonging to the specified category.

10. **Filter by Area**
    - Method: `GET`
    - URL: `www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
    - Description: Retrieves meals from the specified area.

## Image URLs

The MealDB API also provides image URLs for meal thumbnails and ingredient thumbnails. These can be used to enhance the visual presentation of the application.

- **Meal Thumbnail Images**
  - URL: `www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview`
  - Description: Displays a thumbnail image of a meal. Append `/preview` to the end of the image URL.

- **Ingredient Thumbnail Images**
  - URLs:
    - `www.themealdb.com/images/ingredients/Lime.png`
    - `www.themealdb.com/images/ingredients/Lime-Small.png`
  - Description: Displays thumbnail images of ingredients.

## Usage

To use the API methods in your Angular application, you can make HTTP requests
