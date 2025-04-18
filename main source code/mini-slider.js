document.querySelectorAll('.mini-slider').forEach((sliderWrapper) => {
    let slider = sliderWrapper.querySelector('.slider .list');
    let items = sliderWrapper.querySelectorAll('.slider .list .item');
    let next = sliderWrapper.querySelector('.next');
    let prev = sliderWrapper.querySelector('.prev');
    let dots = sliderWrapper.querySelectorAll('.slider .dots li');

    let active = 0;
    let lengthItems = items.length - 1;

    const reloadSlider = () => {
        slider.style.left = -items[active].offsetLeft + 'px';
        sliderWrapper.querySelector('.slider .dots li.active').classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => next.click(), 3000);
    };

    next.onclick = () => {
        active = active + 1 > lengthItems ? 0 : active + 1;
        reloadSlider();
    };

    prev.onclick = () => {
        active = active - 1 < 0 ? lengthItems : active - 1;
        reloadSlider();
    };

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            active = i;
            reloadSlider();
        });
    });

    let refreshInterval = setInterval(() => next.click(), 3000);

    window.addEventListener('resize', reloadSlider);
});