function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

window.addEventListener('DOMContentLoaded', () => {
    const cityDiv = document.getElementById("city-select");
    const popup = document.getElementById("city-popup");
    const question = document.getElementById("city-question");
    const closeBtn = document.getElementById("close-popup");

    if (cityDiv && popup && question && closeBtn) {
        cityDiv.addEventListener("click", () => {
            const cityName = cityDiv.querySelector("strong").innerText.trim();
            question.innerText = `Вы из ${cityName}?`;
            popup.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    } else {
        console.error("Մի բան չի գտնվել։ Ստուգիր id-ները HTML-ում։");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const leftBtn = document.querySelector(".slider-btn.left");
    const rightBtn = document.querySelector(".slider-btn.right");

    const scrollStep = 300;

    leftBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -scrollStep,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: scrollStep,
            behavior: "smooth"
        });
    });
});