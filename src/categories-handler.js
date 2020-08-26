import './components/meals-grid.js'
import DataFetch from "./dataFetch";
import mealHandler from "./meal-handler";

const categoriesHandler = () => {
    const categoriesElement = document.querySelectorAll('category-item')
    const mainContainer = document.querySelector('main')

    const onClickCategoryItem = async (event) => {
        const target = event.target;
        mainContainer.innerHTML = `
            <h2>Category: ${target.name}</h2>
            <meals-grid></meals-grid>
        `;
        const mealsGridElement = document.querySelector('meals-grid');
        try {
            mealsGridElement.meals = await DataFetch.search('categoryItem', target.name);
        } catch (errorMsg) {
            mainContainer.innerHTML = `Error: ${errorMsg}`;
        }
        mealHandler();
    }

    categoriesElement.forEach(category => {
        (category.clickEvent = onClickCategoryItem)
    });
}

export default categoriesHandler