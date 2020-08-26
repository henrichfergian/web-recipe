import './components/meal-item.js'
import DataFetch from './dataFetch.js';

const mealHandler = () => {
    const mainContainer = document.querySelector('main')
    const mealsItemElement = document.querySelectorAll('meal-item')

    const onClickMealItem = async (event) => {
        const target = event.target;
        console.log(target);
        console.log(`meal item ok !, the meal id is ${target.mealId}`);
        mainContainer.innerHTML = `
            <meal-detail></meal-detail>
        `
        const mealDetailElement = document.querySelector('meal-detail')
        try {
            mealDetailElement.meal = await DataFetch.search('id', target.mealId)
        } catch (errorMsg) {
            console.log(errorMsg)
        }
    }

    mealsItemElement.forEach(mealItem => {
        (mealItem.clickEvent = onClickMealItem)
    });
}

export default mealHandler