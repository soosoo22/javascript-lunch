import DOM from '../utils/DOM';
import RestaurantForm from './RestaurantForm';

const { $ } = DOM;

class Modal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /*html*/ `
<<<<<<< HEAD
    <div class="modal">
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <h2 class="modal-title text-title">새로운 음식점</h2>
        <form id="restaurant-form"></form>
      </div>
=======
    <div class="restaurant-form-modal">
    <div class="modal-backdrop"></div>
      <div class="modal-container">
      <h2 class="modal-title text-title">새로운 음식점</h2>
      <form id="restaurant-form"></form>
    </div>
    </div>
    <div class="detail-info-modal">
      <div class="modal-backdrop"></div>
      <div class="detail-info-container"></div>
>>>>>>> step2
    </div>
    `;
    this.setEvent();
  }

  setEvent() {
    this.appendForm();
    this.closeModal();
  }

  appendForm() {
    $('#restaurant-form')?.appendChild(new RestaurantForm());
  }

  closeModal() {
<<<<<<< HEAD
    $('.modal-backdrop')?.addEventListener('click', () => {
      $('.modal')?.classList.remove('modal--open');
    });
    $('.modal--close')?.addEventListener('click', () => {
      $('.modal')?.classList.remove('modal--open');
    });
=======
    $('.modal-backdrop')?.addEventListener('click', () => this.toggleModal());
    $('.modal--close')?.addEventListener('click', () => this.toggleModal());
  }

  toggleModal() {
    $('.restaurant-form-modal')?.classList.toggle('modal--open', false);
>>>>>>> step2
  }
}

customElements.define('matzip-modal', Modal);
