import Matzip from './matzip';
import DOM from './utils/DOM';
import Restaurant from './components/Restaurant';
import storage from './storage';
const { $, $$ } = DOM;
const root = {
    init() {
        const matzip = new Matzip(storage.getData());
        this.initList(matzip);
        this.listenCategoryChange(matzip);
        this.listenRestaurantAdd(matzip);
    },
    initList(matzip) {
        document.addEventListener('DOMContentLoaded', () => {
            const initSort = $('#sorting-filter');
            const sortBy = initSort.options[initSort.selectedIndex].value;
            matzip.filterAndSort('전체', sortBy).forEach((restaurant) => {
                $('.restaurant-list-container')?.appendChild(new Restaurant(restaurant));
            });
        });
    },
    listenCategoryChange(matzip) {
        document.addEventListener('filterChange', (event) => {
            Array.from($$('.restaurant')).map((node) => node.remove());
            const customEvent = event;
            const selectedCategory = customEvent.detail.selectedCategory;
            const selectedSort = customEvent.detail.selectedSort;
            const restaurants = matzip.filterAndSort(selectedCategory, selectedSort);
            restaurants.forEach((restaurant) => {
                $('.restaurant-list-container')?.appendChild(new Restaurant(restaurant));
            });
        });
    },
    listenRestaurantAdd(matzip) {
        $('#restaurant-form')?.addEventListener('submit', (event) => {
            event.preventDefault();
            const fieldValues = Array.from($$('.form-item')).map((item) => {
                const field = item.children[1];
                return field.getValue();
            });
            const newRestaurant = {
                category: fieldValues[0],
                name: fieldValues[1],
                distance: Number(fieldValues[2]),
                introduction: fieldValues[3],
                link: fieldValues[4],
            };
            try {
                matzip.add(newRestaurant);
                storage.addData(newRestaurant);
                $('.modal')?.classList.remove('modal--open');
                $('.restaurant-list-container')?.appendChild(new Restaurant(newRestaurant));
            }
            catch (error) {
                alert(error);
            }
        });
    },
};
export default root;
