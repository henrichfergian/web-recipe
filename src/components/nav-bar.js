import './nav-search.js'
import './nav-item.js'

class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                nav-bar {
                    box-shadow: 0 0.063em 0.313em 0 rgba(0, 0, 0, .075);
                    position: sticky;
                    top: 0;
                    width: 100%;
                    background: #e01a22;
                    display: flex;
                    padding: 0.625em
                }
            
                h1 {
                flex-basis: 40%;
                }
            
                a {
                text-decoration: none;
                color: white;
                }
            </style>

            <h1><a href="./index.html">Foodie</a></h1>
            <nav-item></nav-item>
            <nav-search></nav-search>
        `;
    }
}

customElements.define("nav-bar", NavBar)