function updateCounter() {
    const startDate = new Date("2024-04-22T00:00:00");
    const now = new Date();
    const timeDiff = now - startDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("counter").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s desde 22/04/2024💖`;
}

setInterval(updateCounter, 1000);
updateCounter();
document.addEventListener("DOMContentLoaded", () => {
    const numHearts = 30;
  
    for (let i = 0; i < numHearts; i++) {
      createHeart();
    }
  });
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
  
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
      createHeart(); // Cria novo coração após o antigo desaparecer
    }, parseFloat(heart.style.animationDuration) * 1000);
  }
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
