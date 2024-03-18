class TextArea extends HTMLTextAreaElement {
    constructor(props) {
        super();
        const { name, id, cols, rows } = props;
        this.name = name;
        this.id = id;
        this.cols = cols;
        this.rows = rows;
    }
    getValue() {
        return this.value;
    }
}
customElements.define('matzip-textarea', TextArea, { extends: 'textarea' });
export default TextArea;
