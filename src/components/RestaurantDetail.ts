import { Restaurant } from '../types/index';
import { FavoriteIconFilled, FavoriteIconLined } from '../asset/img/index';
import { CATEGORY_IMAGE } from './Restaurant';
import DOM from '../utils/DOM';

const { $, $$ } = DOM;

export interface RestaurantDetailEvent extends CustomEvent {
  detail: {
    restaurant: Restaurant;
  };
}

class RestaurantDetail extends HTMLElement {
  constructor(restaurant: Restaurant) {
    super();

    const { category, name, distance, introduction, link, favorite } = restaurant;
    this.innerHTML = /* html */ `
    <div class="detail-info-column">
      <div class="restaurant__category">
        <img src="${CATEGORY_IMAGE[category]}" alt="${category}" class="category-icon">
      </div>
      <div class="restaurant__favorite_img">
        <img src="${favorite ? FavoriteIconFilled : FavoriteIconLined}">
      </div>
    </div>
    <div class="detail-info-column">
        <h2 class="restaurant__name text-title">${name}</h2>
        <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
        <p class="restaurant__description text-body restaurant__detail__description">${introduction
          ?.split('\n')
          .join('<br />')}</p>
        <span class="detailed-info-link">${link}</span>
    </div>
    <div class="button-container">
        <button type="button" class="button button--secondary text-caption delete-btn">삭제하기</button>
        <button type="button" class="button button--primary text-caption modal--close">닫기</button>
    </div>
    `;

    this.setEvent(restaurant);
  }

  setEvent(restaurant: Restaurant) {
    this.clickDeleteButton(restaurant);
    this.closeModal();
  }

  clickDeleteButton(restaurant: Restaurant) {
    $('.delete-btn', this)?.addEventListener('click', () => {
      const deleteRestaurantInfo = new CustomEvent('deleteRestaurantInfo', {
        detail: {
          restaurant,
        },
      });
      document.dispatchEvent(deleteRestaurantInfo);

      this.toggleRestaurantDetail();

      $$(`#${restaurant.category}_${restaurant.name}`)?.forEach((node) => node.remove());
    });
  }

  closeModal() {
    $('.detail-info-modal .modal-backdrop')?.addEventListener('click', () =>
      this.toggleRestaurantDetail(),
    );
    $('.modal--close', this)?.addEventListener('click', () => this.toggleRestaurantDetail());
  }

  toggleRestaurantDetail() {
    $('.detail-info-modal')?.classList.toggle('modal--open', false);
    $('detail-info-container')?.remove();
  }
}

customElements.define('detail-info-container', RestaurantDetail);

export default RestaurantDetail;
