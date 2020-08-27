class AreaList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._retVal = null;
    }

    set areas(areas) {
        this._areas = areas;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
            
                ol {
                    border-collapse: collapse;
                    width: 100%;
                    border-spacing: 0;
                    text-align: left;
                }
                
                li {
                    padding: 8px;
                    cursor: pointer;
                }
                
                li:nth-child(even) {
                    background-color: lightblue;
                }

                @media screen and (max-width:450px) {
                    ol {
                        padding: 0 40px;
                    }
                }
            </style>
            
            <ol></ol>
        `
        const listContainer = this._shadowRoot.querySelector('ol');
        this._areas.forEach(area => {
            const areaItem = document.createElement('li');
            areaItem.innerHTML = area.strArea;
            listContainer.appendChild(areaItem);
        });
        this._shadowRoot.querySelectorAll('li').forEach(element => {
            element.addEventListener('click', this._clickEvent);
        })
    }
}

customElements.define('area-list', AreaList)