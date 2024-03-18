import { CategoryAsian, CategoryChinese, CategoryEtc, CategoryJapanese, CategoryKorean, CategoryWestern, } from '../asset/img/index';
export const CATEGORY_IMAGE = {
    한식: CategoryKorean,
    중식: CategoryChinese,
    일식: CategoryJapanese,
    양식: CategoryWestern,
    아시안: CategoryAsian,
    기타: CategoryEtc,
    전체: '',
};
import DOM from '../utils/DOM';
const { $, $$ } = DOM;
class Restaurant extends HTMLUListElement {
    constructor(restaurant) {
        super();
        const { category, name, distance, introduction } = restaurant;
        this.classList.add('restaurant-box');
        this.innerHTML = `
    <li class="restaurant">
      <div class="restaurant__category">
        <img src="${CATEGORY_IMAGE[category]}" alt="${category}" class="category-icon">
      </div>
      <div class="restaurant__info">
        <h2 class="restaurant__name text-subtitle">${name}</h2>
        <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
        <p class="restaurant__description text-body">${introduction}</p>
      </div>
    </li>
    `;
        this.openDetailedInfo(restaurant);
    }
    openDetailedInfo(restaurant) {
        $$('.restaurant-box').forEach((item) => {
            item.addEventListener('click', (event) => {
                $('.detailed-info-container')?.classList.add('detailed-info-container--open');
                alert(Object.values(restaurant));
            });
        });
    }
}
customElements.define('restaurant-list-container', Restaurant, { extends: 'ul' });
export default Restaurant;
