let sliderItem = document.querySelectorAll('.slider__item');
let sliderNext = document.querySelector('.slider__arrow_next');
let sliderPrev = document.querySelector('.slider__arrow_prev');

let slider = 0;

sliderNext.onclick = function () {
    slider++;
    let sliders = Array.from(sliderItem);
    for (let i of sliders) {
        i.className = 'slider__item';
    }
    if (slider >= sliderItem.length) {
        slider = 0;
    }
    sliderItem[slider].className = 'slider__item slider__item_active';
}

sliderPrev.onclick = function () {
    slider--;
    let sliders = Array.from(sliderItem);
    for (let i of sliders) {
        i.className = 'slider__item';
    }
    if (slider < 0) {
        slider = sliderItem.length - 1;
    }
    sliderItem[slider].className = 'slider__item slider__item_active';
}