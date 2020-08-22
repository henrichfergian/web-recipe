import './nav-search.js'
import './nav-item.js'

class navBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
            
                nav-bar {
                    box-shadow: 0 0.063em 0.313em 0 rgba(0, 0, 0, .075);
                    position: sticky;
                    top: 0;
                    width: 100%;
                }
                
                .navContainer {
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

            <div class="navContainer">
                <h1><a href="./index.html">Cooking Master</a></h1>
                <nav-item></nav-item>
                <nav-search></nav-search>
            </div>
        `;
    }
}

customElements.define("nav-bar", navBar)