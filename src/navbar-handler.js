import './components/categories-grid.js'
import './components/area-list.js'

import categories from './data/categories-data.js'
import area from './data/area-data.js'

import categoriesHandler from './categories-handler.js'
import areaHandler from './area-handler.js'
import DataFetch from './dataFetch.js'

const navbarHandler = () => {
    const navSearchElement = document.querySelector('nav-search');
    const navItemElement = document.querySelector('nav-item');
    const mainContainer = document.querySelector('main');

    const onSearchBtnClick = async () => {
        const keyword = navSearchElement.value
        if ((keyword === null) || (keyword === '')) {
            alert("Search field is blank !")
        } else {
            console.log(`btn search ok !, the keyword is ${keyword}`);
            mainContainer.innerHTML = `
                <meal-detail></meal-detail>
            `
            const mealDetailElement = document.querySelector('meal-detail')
            try {
                mealDetailElement.meal = await DataFetch.search('mealName', keyword)
            } catch (errorMsg) {
                console.log(errorMsg)
            }
        }
    }

    const onMenuCategoryBtnClick = async () => {
        mainContainer.innerHTML = `
            <h2>Dish Categories</h2>
            <categories-grid></categories-grid>
        `;
        const categoriesMenuElement = document.querySelector('categories-grid');
        console.log(categoriesMenuElement);
        console.log(categories);
        try {
            categoriesMenuElement.categories = await DataFetch.search('categoriesList');
        } catch (errorMsg) {
            console.log(errorMsg)
        }
        categoriesHandler();
    }

    const onMenuAreaBtnClick = async () => {
        mainContainer.innerHTML = `
            <h2>Dish Origin</h2>
            <area-list></area-list>
        `;
        const areaMenuElement = document.querySelector('area-list');
        try {
            areaMenuElement.areas = await DataFetch.search('areaList');
        } catch (errorMsg) {
            console.log(errorMsg);
        }
        areaHandler();
    }

    navSearchElement.clickEvent = onSearchBtnClick;
    navItemElement.clickMenuEvent1 = onMenuCategoryBtnClick;
    navItemElement.clickMenuEvent2 = onMenuAreaBtnClick;
}

export default navbarHandler