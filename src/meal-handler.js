import './components/meal-item.js'

const mealHandler = () => {
    const mealItemElement = document.querySelectorAll('meal-item')
    console.log(mealItemElement);

    const onClickMealItem = (event) => {
        const target = event.target;
        console.log(target);
        console.log(`meal item ok !, the meal id is ${target.mealId}`);
    }

    mealItemElement.forEach(mealItem => {
        (mealItem.clickEvent = onClickMealItem)
    });
}

export default mealHandler