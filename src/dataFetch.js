class DataFetch {
    static search(options = 'id', keyword) {
        return new Promise(async (resolve, reject) => {
            const baseURL = 'https://www.themealdb.com/api/json/v1/1';
            let response = null;
            switch (options) {
                case 'categoriesList':
                    response = await fetch(`${baseURL}/categories.php`)
                    break;
                case 'categoryItem':
                    response = await fetch(`${baseURL}/filter.php?c=${keyword}`)
                    break;
                case 'areaList':
                    response = await fetch(`${baseURL}/list.php?a=list`)
                    break;
                case 'areaItem':
                    response = await fetch(`${baseURL}/filter.php?a=${keyword}`)
                    break;
                case 'id':
                    response = await fetch(`${baseURL}/lookup.php?i=${keyword}`)
                    break;
                case 'mealName':
                    response = await fetch(`${baseURL}/search.php?s=${keyword}`)
                    break;
            }
            const responseJson = await response.json()

            if (options === `categoriesList`) {
                if (responseJson.categories) {
                    resolve(responseJson.categories);
                } else {
                    reject(`Categories List not found`)
                }
            } else {
                if (responseJson.meals) {
                    resolve(responseJson.meals)
                } else {
                    reject(`${keyword} not found, please check again`)
                }
            }
        })
    }

    static random() {
        return new Promise(async (resolve, reject) => {
            const baseURL = 'https://www.themealdb.com/api/json/v1/1';
            const response = await fetch(`${baseURL}/random.php`)
            const responseJson = await response.json();
            if (responseJson.meals) {
                resolve(responseJson.meals)
            } else {
                reject(`Random generator not working, please contact us`)
            }
        })
    }
}

export default DataFetch;