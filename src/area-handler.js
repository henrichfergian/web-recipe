import DataFetch from "./dataFetch";
import mealHandler from "./meal-handler";

const areaHandler = () => {
    const areaElement = document.querySelector('area-list');
    const mainContainer = document.querySelector('main')

    const onClickAreaItem = async (event) => {
            const target = event.target;
            console.log(target);
            console.log(`area item ok !, the area name is ${target.innerHTML}`);
            mainContainer.innerHTML = `
            <h2>Dish Origin: ${target.innerHTML}</h2>
            <meals-grid></meals-grid>
        `
            const mealsGridElement = document.querySelector('meals-grid');
            try {
                mealsGridElement.meals = await DataFetch.search('areaItem', target.innerHTML)
            } catch (errorMsg) {
                console.log(errorMsg)
            }
            mealHandler();
        }
        (areaElement.clickEvent = onClickAreaItem);
}

export default areaHandler;