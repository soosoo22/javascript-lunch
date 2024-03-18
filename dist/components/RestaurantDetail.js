import { FavoriteIconFilled } from '../asset/img/index';
import { CATEGORY_IMAGE } from './Restaurant';
import DOM from '../utils/DOM';
const { $, $$ } = DOM;
class RestaurantDetail extends HTMLElement {
    constructor(restaurant) {
        super();
        const { category, name, distance, introduction, link } = restaurant;
        this.innerHTML = /* html */ `
    <div class="detailed-info-column">
        <img src="${CATEGORY_IMAGE[category]}" alt="${category}" class="category-icon">
        <img src="${FavoriteIconFilled}">
    </div>
    <div class="detailed-info-column">
        <h2 class="restaurant__name text-subtitle">${name}</h2>
        <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
        <p class="restaurant__description text-body">${introduction}</p>
        <span class="detailed-info-link">${link}</span>
    </div>
    <div class="button-container">
        <button type="button" class="button button--secondary text-caption">삭제하기</button>
        <button type="button" class="button button--primary text-caption modal--close">닫기</button>
    </div>
    `;
    }
}
customElements.define('detailed-info-container', RestaurantDetail);
export default RestaurantDetail;
