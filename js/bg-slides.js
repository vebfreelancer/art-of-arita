shapes.forEach(el => { el.style.backgroundColor = `${el.dataset.bg}`; });
bgItems.forEach(el => { el.style.backgroundImage = `url('${el.dataset.bg}')`; });

const bgSlides = (directions) => {
    let itemClass = `slide-${slideCounter}`;

    if (directions == 'down'){
        if (slideCounter < slidesCount){
            mainSection.classList.remove(itemClass);
            slideCounter++;

            itemClass = `slide-${slideCounter}`;
            mainSection.classList.add(itemClass);
        }
    } else if (directions == 'up'){
        if (slideCounter > 1){
            mainSection.classList.remove(itemClass);
            slideCounter--;

            itemClass = `slide-${slideCounter}`;
            mainSection.classList.add(itemClass);
        }
    }
};