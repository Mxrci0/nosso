function updateCounter() {
    const startDate = new Date("2024-04-22T00:00:00");
    const now = new Date();
    const timeDiff = now - startDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const totalMinutes = Math.floor(timeDiff / (1000 * 60));
    const totalSeconds = Math.floor(timeDiff / 1000);

    const dayEl = document.getElementById("counterDays");
    const hourEl = document.getElementById("counterHours");
    const minuteEl = document.getElementById("counterMinutes");
    const secondEl = document.getElementById("counterSeconds");
    const totalEl = document.getElementById("counterTotal");
    const legacyEl = document.getElementById("counter");
    const progressTitleEl = document.getElementById("counterProgressTitle");
    const progressBarEl = document.getElementById("counterProgressBar");
    const progressPercentEl = document.getElementById("counterProgressPercent");
    const progressTextEl = document.getElementById("counterProgressText");

    if (dayEl) dayEl.innerText = String(days);
    if (hourEl) hourEl.innerText = String(hours).padStart(2, "0");
    if (minuteEl) minuteEl.innerText = String(minutes).padStart(2, "0");
    if (secondEl) secondEl.innerText = String(seconds).padStart(2, "0");

    if (totalEl) {
      totalEl.innerText = `${days} dias no total | ${totalMinutes.toLocaleString("pt-BR")} minutos | ${totalSeconds.toLocaleString("pt-BR")} segundos`;
    }

    if (legacyEl) {
      legacyEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s desde 22/04/2024`;
    }

    let completedYears = now.getFullYear() - startDate.getFullYear();
    const anniversaryThisYear = new Date(startDate);
    anniversaryThisYear.setFullYear(startDate.getFullYear() + completedYears);

    if (now < anniversaryThisYear) {
      completedYears -= 1;
    }

    completedYears = Math.max(completedYears, 0);

    const milestoneYear = completedYears + 1;
    const periodStart = new Date(startDate);
    periodStart.setFullYear(startDate.getFullYear() + completedYears);

    const milestoneDate = new Date(startDate);
    milestoneDate.setFullYear(startDate.getFullYear() + milestoneYear);

    const periodTotal = milestoneDate - periodStart;
    const periodElapsed = now - periodStart;
    const progressRatio = Math.min(Math.max(periodElapsed / periodTotal, 0), 1);
    const progressPercent = Math.round(progressRatio * 100);
    const remainingMs = Math.max(milestoneDate - now, 0);
    const remainingDays = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));

    if (progressTitleEl) {
      progressTitleEl.innerText = `Rumo aos ${milestoneYear} anos`;
    }

    if (progressBarEl) {
      progressBarEl.style.width = `${progressPercent}%`;
    }

    if (progressPercentEl) {
      progressPercentEl.innerText = `${progressPercent}%`;
    }

    if (progressTextEl) {
      if (remainingDays > 0) {
        progressTextEl.innerText = `Faltam ${remainingDays} dias para completar ${milestoneYear} anos juntos.`;
      } else {
        progressTextEl.innerText = `${milestoneYear} anos completos! Que venham muitos outros. ❤️`;
      }
    }
}

setInterval(updateCounter, 1000);
updateCounter();

function initInteractiveMenu() {
  // Menu permanece sempre visivel para navegação rapida em celular/tablet.
}

document.addEventListener("DOMContentLoaded", () => {
    const numHearts = 30;

  initInteractiveMenu();
  
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
