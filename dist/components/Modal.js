import DOM from '../utils/DOM';
import RestaurantForm from './RestaurantForm';
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
        <!--div class="detail-modal-backdrop"></div-->
        <div class="detailed-info-container"></div>
      </div>
      

    `;
        this.setEvent();
    }
    setEvent() {
        this.appendForm();
        this.closeModal();
        this.appendRestaurantDetailInfo();
        //this.closeRestaurantDetailInfo();
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
    appendRestaurantDetailInfo() {
        const info = {
            name: '쑤쑤당',
            category: '기타',
            distance: 5,
            introduction: '현수연입니다.',
            link: 'www.naver.com',
        };
        $('.detailed-info-container')?.appendChild(new RestaurantDetail(info));
    }
    closeRestaurantDetailInfo() {
        $('.detail-modal-backdrop')?.addEventListener('click', () => {
            $('.detailed-info-container')?.classList.remove('detailed-info-container--open');
        });
        $('.modal--close')?.addEventListener('click', () => {
            $('.detailed-info-container')?.classList.remove('detailed-info-container--open');
        });
    }
}
customElements.define('matzip-modal', Modal);
