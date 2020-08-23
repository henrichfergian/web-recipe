const areaHandler = () => {
    const areaElement = document.querySelector('area-list');

    const onClickAreaItem = (event) => {
            const target = event.target;
            console.log(target);
            console.log(`area item ok !, the area name is ${target.innerHTML}`);
        }
        (areaElement.clickEvent = onClickAreaItem);
}

export default areaHandler;