class ItemRecommend extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event
        this.render();
    }

    get mealId() {
        return this._meal[0].idMeal
    }

    get ingredients() {
        let items = {
            name: [],
            measure: []
        }
        for (let i = 1; i <= 20; i++) {
            if ((this._meal[0][`strIngredient${i}`] === '') || (this._meal[0][`strIngredient${i}`] === null)) {
                break;
            } else {
                items.name.push(this._meal[0][`strIngredient${i}`]);
                items.measure.push(this._meal[0][`strMeasure${i}`]);
            }
        }
        return items;
    }

    render() {
        const mealIngredients = this.ingredients;
        this._shadowRoot.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
            
                :host {
                box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.349);
                border-radius: 5px;
                display: block;
                cursor: pointer;
                }
            
                .itemRecommend {
                display: flex;
                }
            
                img {
                max-height: 380px;
                width: 100%;
                object-fit: cover;
                object-position: center;
                flex-basis: 50%;
                padding: 10px;
                }
            
                .desc {
                flex-basis: 50%;
                padding: 5px 10px;
                }
            
                table {
                border-collapse: collapse;
                width: 100%;
                border-spacing: 0;
                text-align: left;
                }

                h2 {
                    padding: 15px
                }
            
                td,
                h3,
                h4 {
                padding: 8px;
                }
            </style>
        
            <h2>Today's Recomendation</h2>
            <hr>
            <div class="itemRecommend">
                <img src="${this._meal[0].strMealThumb}"
                    alt="${this._meal[0].strMeal}">
                <div class="desc">
                    <h3>${this._meal[0].strMeal}</h3>
                    <table>
                        <tr>
                            <td>Category: ${this._meal[0].strCategory}</td>
                                </tr>
                                <tr>
                                    <td>Origin: ${this._meal[0].strArea}</td>
                                </tr>
                    </table>
                    <br>
                    <h4>Ingredients</h4>
                    <table class="meal-ingredients"></table>
                </div>
            </div>
            `;

        const ingredientsTable = this._shadowRoot.querySelector('.meal-ingredients')
        for (let i = 0; i < mealIngredients.name.length; i++) {
            const ingredientsItem = document.createElement('tr');
            ingredientsItem.innerHTML = `
                <td>${mealIngredients.name[i]}</td>
                <td>${mealIngredients.measure[i]}</td>
                `;
            ingredientsTable.appendChild(ingredientsItem);
        }
        this.addEventListener('click', this._clickEvent)
    }
}

customElements.define('item-recommend', ItemRecommend)