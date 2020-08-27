class NavSearch extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this._shadowRoot.querySelector('#navSearchInput').value
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-basis: 50%;
                    width: 100%;
                    justify-content: flex-end;
                }
            
                input {
                    width: 60%;
                    padding: 0.625em;
                    border: 0;
                    font-weight: bold;
                }
            
                button {
                    width: 15%;
                    margin-right: 30px;                    
                    cursor: pointer;
                    padding: 0.625em;
                    background-color: #4483d5;
                    color: white;
                    border: 0;
                    font-size: 1.1em;
                }
                @media screen and (max-width:450px) {
                    button {
                        flex-basis: 40%;
                        margin: 0;
                    }
                }
            </style>

            <input type="search" placeholder="Search dish name" id="navSearchInput">
            <button id="navSearchBtn" type="submit">Search</button>
        `
        this._shadowRoot.querySelector('#navSearchBtn').addEventListener('click', this._clickEvent)
    }
}

customElements.define("nav-search", NavSearch)