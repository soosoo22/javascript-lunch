class Image extends HTMLImageElement {
    constructor(props) {
        super();
        const { src, alt, classnames } = props;
        this.src = src;
        if (alt !== undefined)
            this.alt = alt;
        if (classnames !== undefined)
            this.classList.add(...classnames);
    }
}
customElements.define('matzip-image', Image, { extends: 'img' });
export default Image;
