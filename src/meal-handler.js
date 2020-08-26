import './components/meal-detail.js'
import DataFetch from './dataFetch.js';

const mealHandler = (item = 'meal-item') => {
    const mainContainer = document.querySelector('main')
    const mealsItemElement = document.querySelectorAll(item)

    const onClickMealItem = async (event) => {
        const target = event.target;
        mainContainer.innerHTML = `
            <meal-detail></meal-detail>
        `
        const mealDetailElement = document.querySelector('meal-detail')
        try {
            mealDetailElement.meal = await DataFetch.search('id', target.mealId)
        } catch (errorMsg) {
            mainContainer.innerHTML = `Error: ${errorMsg}`;
        }

    }

    mealsItemElement.forEach(mealItem => {
        (mealItem.clickEvent = onClickMealItem)
    });
}

export default mealHandler