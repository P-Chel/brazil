document.addEventListener('DOMContentLoaded', () => {
    class Slider {
        constructor(selector) {
            this.slider = document.querySelector(selector);
            this.slides = Array.from(this.slider.querySelectorAll('.slide'));
            this.dotsContainer = this.slider.querySelector('.slider-dots');
            this.currentIndex = 0;
            this.autoPlayInterval = null;
            
            this.init();
        }

        init() {
            this.createDots();
            this.addEventListeners();
            this.showSlide(this.currentIndex);
            this.startAutoPlay();
        }

        createDots() {
            this.slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('slider-dot');
                dot.addEventListener('click', () => this.showSlide(index));
                this.dotsContainer.appendChild(dot);
            });
            this.dots = Array.from(this.dotsContainer.children);
        }

        addEventListeners() {
            this.slider.querySelector('.prev').addEventListener('click', () => this.prevSlide());
            this.slider.querySelector('.next').addEventListener('click', () => this.nextSlide());
            window.addEventListener('resize', () => this.handleResize());
        }

        showSlide(index) {
            // Boundary checks
            if (index < 0) index = this.slides.length - 1;
            if (index >= this.slides.length) index = 0;
            
            // Update slides
            this.slides.forEach(slide => slide.classList.remove('active'));
            this.slides[index].classList.add('active');
            
            // Update dots
            this.dots.forEach(dot => dot.classList.remove('active'));
            this.dots[index].classList.add('active');
            
            this.currentIndex = index;
        }

        nextSlide() {
            this.showSlide(this.currentIndex + 1);
        }

        prevSlide() {
            this.showSlide(this.currentIndex - 1);
        }

        handleResize() {
            // Add any resize handling if needed
        }

        startAutoPlay(interval = 5000) {
            this.autoPlayInterval = setInterval(() => this.nextSlide(), interval);
        }

        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
        }
    }

    // Initialize slider
    const slider = new Slider('.slider');
});