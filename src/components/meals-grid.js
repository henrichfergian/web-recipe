import './meal-item.js'

class mealsGrid extends HTMLElement {

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    connectedCallback() {
        this.render
    }

    render() {
        this.innerHTML = `
            <style>
                meals-grid {
                display: flex;
                flex-wrap: wrap;
                }

                meal-item {
                    margin: 10px;
                }
            </style>
        `;
        this._meals.forEach(meal => {
            const mealElement = document.createElement('meal-item');
            mealElement.meal = meal;
            this.appendChild(mealElement);
        });
    }
}

customElements.define("meals-grid", mealsGrid)