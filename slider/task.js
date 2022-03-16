let sliderItem = Array.from(document.querySelectorAll('.slider__item'));
let sliderArrow = Array.from(document.querySelectorAll('.slider__arrow'));
let sliderNext = document.querySelector('.slider__arrow_next');
let slider = sliderItem.findIndex((x) => x.classList.contains('slider__item_active'));

for (let i = 0; i < sliderArrow.length; i++) {
    sliderArrow[i].onclick = function () {
        sliderItem[slider].classList.remove('slider__item_active');
        sliderArrow[i] === sliderNext ? slider++ : slider--;
        slider === sliderItem.length ? (slider = 0) : "";
        slider === -1 ? (slider = sliderItem.length - 1) : "";
        sliderItem[slider].classList.add('slider__item_active');
    }
}

//let sliderItem = document.querySelectorAll('.slider__item');
//let sliderNext = document.querySelector('.slider__arrow_next');
//let sliderPrev = document.querySelector('.slider__arrow_prev');
//
//let slider = 0;
//
//sliderNext.onclick = function () {
//    slider++;
//    let sliders = Array.from(sliderItem);
//    for (let i of sliders) {
//        i.className = 'slider__item';
//    }
//    if (slider >= sliderItem.length) {
//        slider = 0;
//    }
//    sliderItem[slider].className = 'slider__item slider__item_active';
//}
//
//sliderPrev.onclick = function () {
//    slider--;
//    let sliders = Array.from(sliderItem);
//    for (let i of sliders) {
//        i.className = 'slider__item';
//    }
//    if (slider < 0) {
//        slider = sliderItem.length - 1;
//    }
//    sliderItem[slider].className = 'slider__item slider__item_active';
//}