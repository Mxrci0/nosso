document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    events.forEach((event, index) => {
        event.style.opacity = "0";
        event.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            event.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            event.style.opacity = "1";
            event.style.transform = "translateY(0)";
        }, index * 200);
    });
});
