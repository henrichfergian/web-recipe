const categoriesHandler = () => {
    const categoriesElement = document.querySelectorAll('category-item')

    const onClickCategoryItem = (event) => {
        const target = event.target;
        console.log(target);
        console.log(`category item ok !, the category name is ${target.name}`);
    }

    categoriesElement.forEach(category => {
        (category.clickEvent = onClickCategoryItem)
    });
}

export default categoriesHandler