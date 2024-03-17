import DOM from '../utils/DOM';
import RestaurantForm from './RestaurantForm';
import { Restaurant } from '../types';
import RestaurantDetail from './RestaurantDetail';

const { $ } = DOM;

class Modal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /*html*/ `
    <div class="modal">
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <h2 class="modal-title text-title">새로운 음식점</h2>
        <form id="restaurant-form"></form>
      </div>
      </div>
      <div class="detail-modal">
        <div class="detail-modal-backdrop detail-info-container--close"></div>
        <div class="detail-info-container detail-info-container--close"></div>
      </div>
    `;
    this.setEvent();
  }

  setEvent() {
    this.appendForm();
    this.closeModal();
    this.closeRestaurantDetailInfo();
  }

  appendForm() {
    $('#restaurant-form')?.appendChild(new RestaurantForm());
  }

  closeModal() {
    $('.modal-backdrop')?.addEventListener('click', () => {
      $('.modal')?.classList.remove('modal--open');
    });
    $('.modal--close')?.addEventListener('click', () => {
      $('.modal')?.classList.remove('modal--open');
    });
  }

  closeRestaurantDetailInfo() {
    $('.detail-modal-backdrop', this)?.addEventListener('click', () => {
      $('detail-info-container')?.remove();
      $('.detail-info-container')?.classList.add('detail-info-container--close');
      $('.detail-modal-backdrop', this)?.classList.add('detail-info-container--close');
    });
  }
}

customElements.define('matzip-modal', Modal);
