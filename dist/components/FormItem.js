import { Label, Select, Caption, Input, TextArea } from './tag';
class FormItem extends HTMLDivElement {
    constructor(props) {
        const { required } = props;
        super();
        this.classList.add('form-item');
        if (required)
            this.classList.add('form-item--required');
        this.createElements(props);
    }
    createElements(props) {
        const frag = document.createDocumentFragment();
        const { label, select, caption, input, textarea } = props;
        this.createLabel(frag, label);
        this.createSelect(frag, select);
        this.createInput(frag, input);
        this.createTextArea(frag, textarea);
        this.createCaption(frag, caption);
        this.appendChild(frag);
    }
    createLabel(frag, label) {
        frag.appendChild(new Label(label));
    }
    createSelect(frag, select) {
        if (select === undefined)
            return;
        frag.appendChild(new Select(select));
    }
    createInput(frag, input) {
        if (input === undefined)
            return;
        frag.appendChild(new Input(input));
    }
    createTextArea(frag, textarea) {
        if (textarea === undefined)
            return;
        frag.appendChild(new TextArea(textarea));
    }
    createCaption(frag, caption) {
        if (caption === undefined)
            return;
        frag.appendChild(new Caption(caption));
    }
}
customElements.define('matzip-formitem', FormItem, { extends: 'div' });
export default FormItem;
