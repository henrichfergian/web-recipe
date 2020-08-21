class navBar extends HTMLElement {
    // constructor() {
    //     super();
    //     this._shadowRoot = this.attachShadow({mode: "open"})
    // }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
    }

    render() {
        this.innerHTML = `
        
        `;
    }
}

customElements.define("nav-bar", navBar)