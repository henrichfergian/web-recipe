class mealsGrid extends HTMLElement {
    // constructor() {
    //     super();
    //     this._shadowRoot = this.attachShadow({mode: "open"})
    // }

    set meals(meals) {
        this._meals = meals;
        render();
    }

    render() {
        this.innerHTML = `
        `
        this._meals.forEach(meal => {
            const mealElement = document.createElement('meal-item');
            mealElement.meal = meal;
            this.appendChild(mealElement);
        });
    }
}

customElements.define("meals-grid", mealsGrid)