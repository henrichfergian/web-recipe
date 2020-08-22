import './components/nav-bar.js'
import './style/main.css'
import './components/categories-grid.js'
import categories from './categories-data'

const navbarHandler = () => {
    const navSearchElement = document.querySelector('nav-search');
    const navItemElement = document.querySelector('nav-item');

    const onSearchBtnClick = () => {
        const keyword = navSearchElement.value
        if ((keyword === null) || (keyword === '')) {
            alert("the search field is blank !")
        } else {
            console.log(`btn search ok !, the keyword is ${keyword}`);
        }
    }

    const onMenuCategoryBtnClick = () => {
        const mainContainer = document.querySelector('main');
        console.log(mainContainer)
        mainContainer.innerHTML = `
            <h2>Categories</h2>
            <categories-grid></categories-grid>
        `;
        const categoriesElement = document.querySelector('categories-grid');
        categoriesElement.categories = categories;
    }

    const onMenuIngrdientBtnClick = () => {
        console.log("menu ingredient ok !")
    }

    navSearchElement.clickEvent = onSearchBtnClick;
    navItemElement.clickMenuEvent1 = onMenuCategoryBtnClick;
    navItemElement.clickMenuEvent2 = onMenuIngrdientBtnClick;
}

navbarHandler();