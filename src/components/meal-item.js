class mealItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        })
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get mealId() {
        return this._meal.idMeal;
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
                
                :host {
                flex-basis: 31.3333%;
                cursor: pointer;
                }
                
                .card {
                    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.137);
                    height: 18.750em;
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

                a {
                    text-decoration: none;
                    color: black;
                }

                @media screen and (max-width:450px) {
                    :host {
                        flex-basis: 30.33333%;
                        cursor: pointer;
                    }
                    
                    .card {
                        padding: 2px;
                        height: 132px;
                    }

                    h3 {
                        padding: 5px;
                        font-size: 0.9em;
                    }
                
                    img {
                        height: 70px;
                        width : 103px;
                    }
                }
            </style>

            <div class="card">
                <a href="#${this._meal.strMeal}">
                    <img src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
                    <h3>${this._meal.strMeal}</h3>
                </a>
            </div>
        `;
        this.addEventListener("click", this._clickEvent)
    }
}

customElements.define("meal-item", mealItem)