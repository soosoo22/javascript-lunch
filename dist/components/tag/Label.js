class Label extends HTMLLabelElement {
    constructor(props) {
        super();
        const { htmlFor, text } = props;
        this.htmlFor = htmlFor;
        this.textContent = text;
    }
}
customElements.define('matzip-label', Label, { extends: 'label' });
export default Label;
