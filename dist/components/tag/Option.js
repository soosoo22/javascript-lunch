class Option extends HTMLOptionElement {
    constructor(props) {
        super();
        const { value, text } = props;
        this.value = value;
        this.textContent = text;
    }
}
customElements.define('matzip-option', Option, { extends: 'option' });
export default Option;
