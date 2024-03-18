<<<<<<< HEAD
=======
import { ArrowIcon } from '../../asset/img';
>>>>>>> step2
import Option from './Option';
import OptionProps from './props/OptionProps';
import SelectProps from './props/SelectProps';

class Select extends HTMLSelectElement {
  constructor(props: SelectProps) {
    super();
    const { name, id, classname, required, options } = props;

    this.name = name;
    this.id = id;
    if (classname !== undefined) this.classList.add(classname);
    this.required = required;
<<<<<<< HEAD
=======
    this.style.background = `url(${ArrowIcon}) no-repeat right 10px center`;
>>>>>>> step2
    this.addOptions(options);
  }

  addOptions(options: OptionProps[]) {
    options.forEach((option) => {
      this.appendChild(new Option(option));
    });
  }

  getValue(): string {
    return this.options[this.selectedIndex].value;
  }
}

customElements.define('matzip-select', Select, { extends: 'select' });

export default Select;
