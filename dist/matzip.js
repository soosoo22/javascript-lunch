import { CategoryValidator, NameValidator, DistanceValidator } from './validator/index';
class Matzip {
    constructor(restaurants) {
        this.restaurants = [];
        this.restaurants = restaurants;
    }
    getRestaurants() {
        return [...this.restaurants];
    }
    add(restaurant) {
        this.addValidate(restaurant);
        this.restaurants.push(restaurant);
    }
    filterAndSort(category, sortBy) {
        if (category === '전체')
            return this.sort(sortBy, this.restaurants);
        const filterResult = [...this.restaurants].filter((restaurant) => restaurant.category === category);
        return this.sort(sortBy, filterResult);
    }
    sort(sortBy, restaurants) {
        const SORT_BY = {
            name: this.sortByName,
            distance: this.sortByDistance,
        };
        return [...restaurants].sort(SORT_BY[sortBy]);
    }
    filterByCategory(category) {
        if (category === '전체')
            return [...this.restaurants];
        return [...this.restaurants].filter((restaurant) => restaurant.category === category);
    }
    sortByName(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
    sortByDistance(a, b) {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    }
    addValidate(restaurant) {
        CategoryValidator.empty(restaurant.category + '');
        CategoryValidator.exist(restaurant.category + '');
        NameValidator.empty(restaurant.name);
        DistanceValidator.empty(restaurant.distance);
        DistanceValidator.exist(restaurant.distance);
    }
}
export default Matzip;
