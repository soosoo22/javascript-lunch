class Input extends HTMLInputElement {
    constructor(props) {
        super();
        const { type, name, id, required } = props;
        this.type = type;
        this.name = name;
        this.id = id;
        this.required = required;
    }
    getValue() {
        return this.value;
    }
}
customElements.define('matzip-input', Input, { extends: 'input' });
export default Input;
