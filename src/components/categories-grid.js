import './category-item.js'

class CategoriesGrid extends HTMLElement {

    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                categories-grid {
                display: flex;
                flex-wrap: wrap;
                }

                category-item {
                    margin: 10px;
                }

                @media screen and (max-width:450px) {
                    category-item {
                        margin: 5px;
                    }
                }
            </style>
        `;
        this._categories.forEach(category => {
            const categoryElement = document.createElement('category-item');
            categoryElement.category = category;
            this.appendChild(categoryElement);
        });
    }
}

customElements.define('categories-grid', CategoriesGrid)