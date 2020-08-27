class MealDetail extends HTMLElement {
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
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.137);
                margin: 20px 5px;
                text-align: justify;
                display: block;
                }
            
                img {
                padding: 20px;
                width: 100%;
                height: 600px;
                object-fit: cover;
                object-position: center;
                border-radius: 5px;
                }
            
                h2,
                h3 {
                padding: 10px;
                }
            
                p {
                padding: 20px;
                }
            
                table {
                border-collapse: collapse;
                width: 50%;
                border-spacing: 0;
                text-align: left;
                margin-left: 20px;
                font-size: 1.2em;
                }
            
                td {
                padding: 8px;
                }

                @media screen and (max-width:450px) {
                    table {
                        width: 90%;
                    }

                    td {
                        padding: 2px;
                    }

                    p {
                        padding: 5px 20px;
                    }

                    img {
                        height: 300px;
                    }
                }
            </style>

            <h2>${this._meal['0'].strMeal}</h2>
            <hr>
            <img src="${this._meal['0'].strMealThumb}"
                alt="${this._meal['0'].strMeal}">
                <h3>Ingredients</h3>
                <table></table>
        `;

        const ingredientsTable = this._shadowRoot.querySelector('table')
        for (let i = 0; i < mealIngredients.name.length; i++) {
            const ingredientsItem = document.createElement('tr');
            ingredientsItem.innerHTML = `
                <td>${mealIngredients.name[i]}</td>
                <td>${mealIngredients.measure[i]}</td>
                `;
            ingredientsTable.appendChild(ingredientsItem);
        }

        this._shadowRoot.innerHTML += `
            <br>
            <h3>Cooking Instruction</h3>
            <p>${this._meal[0].strInstructions}</p>
        `
    }
}

customElements.define('meal-detail', MealDetail)