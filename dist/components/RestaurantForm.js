import { Button } from './tag';
import FormItem from './FormItem';
import Condition from '../constants/Condition';
const { CATEGORY, DISTANCE } = Condition;
class RestaurantForm extends HTMLElement {
    constructor() {
        super();
        this.createElements();
    }
    createElements() {
        this.createCategoryField();
        this.createRestaurantNameField();
        this.createDistanceField();
        this.createDescriptionField();
        this.createLinkField();
        this.createButtons();
    }
    createCategoryField() {
        const label = {
            htmlFor: 'category',
            text: '카테고리',
        };
        const options = [
            { value: '', text: '선택해 주세요' },
            { value: CATEGORY.KOREAN_FOOD, text: CATEGORY.KOREAN_FOOD },
            { value: CATEGORY.CHINESE_FOOD, text: CATEGORY.CHINESE_FOOD },
            { value: CATEGORY.JAPANESE_FOOD, text: CATEGORY.JAPANESE_FOOD },
            { value: CATEGORY.WESTERN_FOOD, text: CATEGORY.WESTERN_FOOD },
            { value: CATEGORY.ASIAN_FOOD, text: CATEGORY.ASIAN_FOOD },
            { value: CATEGORY.ETC, text: CATEGORY.ETC },
        ];
        const select = {
            name: 'category',
            id: 'category',
            required: true,
            options: options,
        };
        this.appendChild(new FormItem({
            required: true,
            label,
            select,
        }));
    }
    createRestaurantNameField() {
        const label = {
            htmlFor: 'name',
            text: '이름',
        };
        const input = {
            type: 'text',
            name: 'name',
            id: 'name',
            required: true,
        };
        this.appendChild(new FormItem({
            required: true,
            label,
            input,
        }));
    }
    createDistanceField() {
        const label = {
            htmlFor: 'distance',
            text: '거리(도보 이동 시간)',
        };
        const options = [
            { value: '', text: '선택해 주세요' },
            { value: `${DISTANCE.FIVE}`, text: `${DISTANCE.FIVE}분 내` },
            { value: `${DISTANCE.TEN}`, text: `${DISTANCE.TEN}분 내` },
            { value: `${DISTANCE.FIFTEEN}`, text: `${DISTANCE.FIFTEEN}분 내` },
            { value: `${DISTANCE.TWENTY}`, text: `${DISTANCE.TWENTY}분 내` },
            { value: `${DISTANCE.THIRTY}`, text: `${DISTANCE.THIRTY}분 내` },
        ];
        const select = {
            name: 'distance',
            id: 'distance',
            required: true,
            options,
        };
        this.appendChild(new FormItem({
            required: true,
            label,
            select,
        }));
    }
    createDescriptionField() {
        const label = {
            htmlFor: 'description',
            text: '설명',
        };
        const textarea = {
            name: 'description',
            id: 'description',
            cols: 30,
            rows: 15,
        };
        const caption = {
            classnames: ['help-text', 'text-caption'],
            text: '메뉴 등 추가 정보를 입력해 주세요.',
        };
        this.appendChild(new FormItem({
            required: false,
            label,
            textarea,
            caption,
        }));
    }
    createLinkField() {
        const label = {
            htmlFor: 'link',
            text: '참고 링크',
        };
        const input = {
            type: 'text',
            name: 'link',
            id: 'link',
            required: false,
        };
        const caption = {
            classnames: ['help-text', 'text-caption'],
            text: '매장 정보를 확인할 수 있는 링크를 입력해 주세요.',
        };
        this.appendChild(new FormItem({
            required: false,
            label,
            input,
            caption,
        }));
    }
    createButtons() {
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'button-container');
        const cancelButton = {
            type: 'reset',
            classnames: ['button', 'button--secondary', 'text-caption', 'modal--close'],
            children: '취소하기',
        };
        const submitButton = {
            type: 'submit',
            classnames: ['button', 'button--primary', 'text-caption'],
            children: '추가하기',
        };
        buttonContainer.appendChild(new Button(cancelButton));
        buttonContainer.appendChild(new Button(submitButton));
        this.appendChild(buttonContainer);
    }
}
customElements.define('restaurant-form', RestaurantForm);
export default RestaurantForm;
