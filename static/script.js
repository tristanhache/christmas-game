document.addEventListener("DOMContentLoaded", () => {
    const santa = document.querySelector(".santa");
    const presents = document.querySelectorAll(".present");

    presents.forEach((present) => {
        present.style.left = Math.random() * window.innerWidth + "px";
        present.style.animation = "fall 3s linear infinite";

        present.addEventListener("animationiteration", () => {
            present.style.left = Math.random() * window.innerWidth + "px";
        });

        present.addEventListener("click", () => {
            present.style.animationPlayState = "paused";
            present.style.display = "none"; // You can replace this with a "collected" effect.
        });
    });
});
