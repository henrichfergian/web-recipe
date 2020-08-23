import categories from './categories-data'
import area from './area-data.js'

import categoriesHandler from './categories-handler.js'
import areaHandler from './area-handler.js'

const navbarHandler = () => {
    const navSearchElement = document.querySelector('nav-search');
    const navItemElement = document.querySelector('nav-item');
    const mainContainer = document.querySelector('main');

    const onSearchBtnClick = () => {
        const keyword = navSearchElement.value
        if ((keyword === null) || (keyword === '')) {
            alert("Search field is blank !")
        } else {
            console.log(`btn search ok !, the keyword is ${keyword}`);
        }
    }

    const onMenuCategoryBtnClick = () => {
        mainContainer.innerHTML = `
            <h2>Dish Categories</h2>
            <categories-grid></categories-grid>
        `;
        const categoriesMenuElement = document.querySelector('categories-grid');
        categoriesMenuElement.categories = categories;
        categoriesHandler();
    }

    const onMenuAreaBtnClick = () => {
        mainContainer.innerHTML = `
            <h2>Dish Origin</h2>
            <area-list></area-list>
        `;
        const areaMenuElement = document.querySelector('area-list');
        areaMenuElement.areas = area;
        areaHandler();
    }

    navSearchElement.clickEvent = onSearchBtnClick;
    navItemElement.clickMenuEvent1 = onMenuCategoryBtnClick;
    navItemElement.clickMenuEvent2 = onMenuAreaBtnClick;
}

export default navbarHandler