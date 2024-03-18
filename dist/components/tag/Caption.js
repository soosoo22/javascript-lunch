class Caption extends HTMLSpanElement {
    constructor(props) {
        super();
        const { classnames, text } = props;
        this.classList.add(...classnames);
        this.textContent = text;
    }
}
customElements.define('matzip-caption', Caption, { extends: 'span' });
export default Caption;
