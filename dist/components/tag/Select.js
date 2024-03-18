import Option from './Option';
class Select extends HTMLSelectElement {
    constructor(props) {
        super();
        const { name, id, classname, required, options } = props;
        this.name = name;
        this.id = id;
        if (classname !== undefined)
            this.classList.add(classname);
        this.required = required;
        this.addOptions(options);
    }
    addOptions(options) {
        options.forEach((option) => {
            this.appendChild(new Option(option));
        });
    }
    getValue() {
        return this.options[this.selectedIndex].value;
    }
}
customElements.define('matzip-select', Select, { extends: 'select' });
export default Select;
