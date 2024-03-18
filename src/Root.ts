import Matzip from './matzip';
import DOM from './utils/DOM';
import { FilterChangeEvent } from './components/FilterContainer';
<<<<<<< HEAD
import Restaurant from './components/Restaurant';
import { CategoryType, SortType, Restaurant as RestaurantType } from './types';
import storage from './storage';
import { Select, Input, TextArea } from './components/tag';
=======
import Restaurant, { FavoriteRestaurantEvent } from './components/Restaurant';
import { CategoryType, SortType, Restaurant as RestaurantType } from './types';
import storage from './storage';
import { Select, Input, TextArea } from './components/tag';
import RestaurantDetail, { RestaurantDetailEvent } from './components/RestaurantDetail';
import { FavoriteIconLined } from './asset/img';
>>>>>>> step2

const { $, $$ } = DOM;

const root = {
  init() {
    const matzip = new Matzip(storage.getData());
    this.initList(matzip);
    this.listenCategoryChange(matzip);
    this.listenRestaurantAdd(matzip);
<<<<<<< HEAD
=======
    this.listenRestaurantDelete(matzip);
    this.listenFavoriteRestaurantChange(matzip);
>>>>>>> step2
  },

  initList(matzip: Matzip) {
    document.addEventListener('DOMContentLoaded', () => {
      const initSort = $('#sorting-filter') as HTMLSelectElement;
      const sortBy = initSort.options[initSort.selectedIndex].value;

      matzip.filterAndSort('전체', sortBy as SortType).forEach((restaurant) => {
        $('.restaurant-list-container')?.appendChild(new Restaurant(restaurant));
      });
<<<<<<< HEAD
=======

      matzip.getRestaurants().forEach((restaurant) => {
        if (restaurant.favorite)
          $('matzip-favorite-container .restaurant-list-container')?.appendChild(
            new Restaurant(restaurant),
          );
      });
>>>>>>> step2
    });
  },

  listenCategoryChange(matzip: Matzip) {
    document.addEventListener('filterChange', (event: Event) => {
<<<<<<< HEAD
      Array.from($$('.restaurant')).map((node) => node.remove());
=======
      Array.from($$('matzip-default-container .restaurant')).map((node) => node.remove());
>>>>>>> step2

      const customEvent = event as FilterChangeEvent;
      const selectedCategory = customEvent.detail.selectedCategory;
      const selectedSort = customEvent.detail.selectedSort;
      const restaurants = matzip.filterAndSort(
        selectedCategory as CategoryType,
        selectedSort as SortType,
      );
      restaurants.forEach((restaurant) => {
        $('.restaurant-list-container')?.appendChild(new Restaurant(restaurant));
      });
    });
  },

  listenRestaurantAdd(matzip: Matzip) {
    $('#restaurant-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const fieldValues = Array.from($$('.form-item')).map((item) => {
        const field = item.children[1] as Select | TextArea | Input;
        return field.getValue();
      });

      const newRestaurant: RestaurantType = {
        category: fieldValues[0] as CategoryType,
        name: fieldValues[1],
        distance: Number(fieldValues[2]),
        introduction: fieldValues[3],
        link: fieldValues[4],
      };

      try {
        matzip.add(newRestaurant);
        storage.addData(newRestaurant);
<<<<<<< HEAD
        $('.modal')?.classList.remove('modal--open');
=======
        $('.restaurant-form-modal')?.classList.remove('modal--open');
>>>>>>> step2
        $('.restaurant-list-container')?.appendChild(new Restaurant(newRestaurant));
      } catch (error) {
        alert(error);
      }
    });
  },
<<<<<<< HEAD
=======

  listenRestaurantDelete(matzip: Matzip) {
    document.addEventListener('deleteRestuarantInfo', (event: Event) => {
      const customEvent = event as RestaurantDetailEvent;
      const restaurantInfo = customEvent.detail.restaurant;

      matzip.delete(restaurantInfo);
      storage.updateData(matzip);
    });
  },

  listenFavoriteRestaurantChange(matzip: Matzip) {
    document.addEventListener('changeRestaurantInfo', (event: Event) => {
      const customEvent = event as FavoriteRestaurantEvent;
      const restaurant = customEvent.detail.restaurant;

      if (restaurant.favorite) {
        $('matzip-favorite-container .restaurant-list-container')?.appendChild(
          new Restaurant(restaurant),
        );
      } else {
        $(`matzip-favorite-container #${restaurant.category}_${restaurant.name}`)?.remove();
        $(`#${restaurant.category}_${restaurant.name} .restaurant__favorite_img img`)?.setAttribute(
          'src',
          FavoriteIconLined,
        );
      }

      matzip.change(restaurant);
      storage.updateData(matzip);
    });
  },
>>>>>>> step2
};

export default root;
