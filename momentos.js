document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("timelineCarousel");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll(".timeline-slides .event"));
    const prevButton = carousel.querySelector(".carousel-btn.prev");
    const nextButton = carousel.querySelector(".carousel-btn.next");
    const counter = document.getElementById("carouselCounter");
    const autoplayToggle = document.getElementById("autoplayToggle");
    let currentIndex = 0;
    let autoplayId = null;
    let autoplayEnabled = false;

    if (!slides.length) return;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("is-active", i === currentIndex);
        });

        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${slides.length}`;
        }
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function previousSlide() {
        showSlide(currentIndex - 1);
    }

    function stopAutoplay() {
        if (!autoplayId) return;
        clearInterval(autoplayId);
        autoplayId = null;
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayId = setInterval(nextSlide, 4500);
    }

    function updateAutoplayButton() {
        if (!autoplayToggle) return;
        autoplayToggle.setAttribute("aria-pressed", String(autoplayEnabled));
        autoplayToggle.classList.toggle("is-on", autoplayEnabled);
        autoplayToggle.textContent = autoplayEnabled ? "Auto play: ligado" : "Auto play: desligado";
    }

    function setAutoplay(enabled) {
        autoplayEnabled = enabled;

        if (autoplayEnabled) {
            startAutoplay();
        } else {
            stopAutoplay();
        }

        updateAutoplayButton();
    }

    if (prevButton) prevButton.addEventListener("click", previousSlide);
    if (nextButton) nextButton.addEventListener("click", nextSlide);
    if (autoplayToggle) {
        autoplayToggle.addEventListener("click", function () {
            setAutoplay(!autoplayEnabled);
        });
    }

    carousel.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            previousSlide();
        }
        if (event.key === "ArrowRight") {
            nextSlide();
        }
    });

    showSlide(0);
    setAutoplay(false);
});
