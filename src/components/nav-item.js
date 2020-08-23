class navItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
        this.render();
        this.addEventListener('click', this.onClickHandler.bind(this));
        this._state = false
    }

    connectedCallback() {
        this.update();
        if (this.hasAttribute("stat")) {
            this.state = true;
        } else {
            this.state = false;
        }
    }

    // setter event + update queryselector
    set clickMenuEvent1(event) {
        this._clickMenuEvent1 = event;
        this.render();
    }

    set clickMenuEvent2(event) {
        this._clickMenuEvent2 = event;
        this.render();
    }

    set state(value) {
        if (value != this._state) {
            this._state = value;
            this.update();
        }
    }

    get state() {
        return this._state
    }

    onClickHandler(event) {
        this.state = !(this.state);
    }

    update() {
        const menuElement = this._shadowRoot.querySelector('.dropdown-menu');
        if (this._state) {
            menuElement.classList.add('show');
        } else {
            menuElement.classList.remove('show');
        }
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
                flex-basis: 10%;
                }
                
                #menuBtn {
                text-align: center;
                color: white;
                padding: 0.625em;
                cursor: pointer;
                font-size: 1.1em;
                }
            
                .dropdown-menu {
                position: absolute;
                padding: 0.625em 0.313em;
                margin: 0.625em 0 0;
                background-color: #fff;
                border: 0.125em solid lightgray;
                border-radius: 0.313em;
                min-width: 11em;
                display: none;
                }
            
                .dropdown-item {
                display: block;
                width: 100%;
                padding: 0.313em 0.625em;
                cursor: pointer;
                }
            
                .dropdown-menu.show {
                display: block;
                }
            </style>

            <div id="menuBtn">Menu</div>
            <div class="dropdown-menu">
                <span>Show by:</span>
                <div id="categoryBtn" class="dropdown-item">Dish Category</div>
                <div id="areaBtn" class="dropdown-item">Dish Origin</div>
            </div>
        `;

        this._shadowRoot.querySelector('#categoryBtn').addEventListener('click', this._clickMenuEvent1)
        this._shadowRoot.querySelector('#areaBtn').addEventListener('click', this._clickMenuEvent2)
    }
}

customElements.define("nav-item", navItem);