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
  