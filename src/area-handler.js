import DataFetch from "./dataFetch";
import mealHandler from "./meal-handler";

const areaHandler = () => {
    const areaListElement = document.querySelector('area-list');
    const mainContainer = document.querySelector('main')

    const onClickAreaItem = async (event) => {
        const target = event.target;
        mainContainer.innerHTML = `
                <h2>Dish Origin: ${target.innerHTML}</h2>
                <meals-grid></meals-grid>
            `;
        const mealsGridElement = document.querySelector('meals-grid');
        try {
            mealsGridElement.meals = await DataFetch.search('areaItem', target.innerHTML)
        } catch (errorMsg) {
            mainContainer.innerHTML = `Error: ${errorMsg}`;
        }
        mealHandler();
    }
    areaListElement.clickEvent = onClickAreaItem;
}

export default areaHandler;