class mealItem extends HTMLElement {
    // constructor() {
    //     super();
    //     this._shadowRoot = this.attachShadow({mode: "open"})
    // }

    set meal(meal) {
        this._meal = meal;
        render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
    }

    get itemId() {
        return this.idMeal
    }

    render() {
        this.innerHTML = `
            <img src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
            <h2>${this._meal.strMeal}</h2>
            <h2>Cooking Instructions</h2>
            <p>${this._meal.strInstructions}</p>
        `;
        this.querySelector("div").addEventListener("click", this._clickEvent)
    }
}

customElements.define("meal-item", mealItem)