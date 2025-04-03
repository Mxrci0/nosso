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
