class CategoryItem extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get name() {
        return this._category.strCategory;
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                * {
                    padding: 0;
                    box-sizing: border-box;
                }
                
                :host {
                margin: 10px;
                flex-basis: 31.3333%;
                cursor: pointer;
                }
                
                .card {
                    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.137);
                    height: 300px;
                    text-align: center;
                    padding: 10px;
                    overflow: hidden;
                    border-radius: 5px;
                }

                img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                object-position: center;
                }
            
                h3,
                p {
                padding: 10px;
                }
            </style>
        
            <div class="card">
                <img src="${this._category.strCategoryThumb}" alt="${this._category.strCategory}">
                <h3>${this._category.strCategory}</h3>
            </div>
        `
        this.addEventListener('click', this._clickEvent)
    }
}

customElements.define('category-item', CategoryItem)