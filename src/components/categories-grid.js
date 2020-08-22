import './category-item.js'

class CategoriesGrid extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                :host {
                display: flex;
                flex-wrap: wrap;
                }
            </style>
        `;
        this._categories.forEach(category => {
            const categoryElement = document.createElement('category-item');
            categoryElement.category = category;
            this._shadowRoot.appendChild(categoryElement);
        });
    }
}

customElements.define('categories-grid', CategoriesGrid)