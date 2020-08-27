import './components/categories-grid.js'
import './components/area-list.js'
import './components/meal-detail.js'

import DataFetch from './dataFetch.js'
import categoriesHandler from './categories-handler.js'
import areaHandler from './area-handler.js'
import mealHandler from './meal-handler.js'

const eventsHandler = () => {
    const navSearchElement = document.querySelector('nav-search');
    const navItemElement = document.querySelector('nav-item');
    const mainContainer = document.querySelector('main');
    const mealRecommendElement = document.querySelector('item-recommend')


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
                mainContainer.innerHTML = `Error: ${errorMsg}`;
            }
        }
    }

    const onMenuCategoryBtnClick = async () => {
        mainContainer.innerHTML = `
            <h2>Dish Categories</h2>
            <categories-grid></categories-grid>
        `;
        const categoriesMenuElement = document.querySelector('categories-grid');
        try {
            categoriesMenuElement.categories = await DataFetch.search('categoriesList');
        } catch (errorMsg) {
            mainContainer.innerHTML = `Error: ${errorMsg}`;
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
            mainContainer.innerHTML = `Error: ${errorMsg}`;
        }
        areaHandler();
    }

    const mealRec = async () => {
        try {
            mealRecommendElement.meal = await DataFetch.random();
        } catch (errorMsg) {
            mainContainer.innerHTML = `Error: ${errorMsg}`;
        }
        mealHandler('item-recommend')
    }

    navSearchElement.clickEvent = onSearchBtnClick;
    navItemElement.clickMenuEvent1 = onMenuCategoryBtnClick;
    navItemElement.clickMenuEvent2 = onMenuAreaBtnClick;
    mealRec();
}

export default eventsHandler