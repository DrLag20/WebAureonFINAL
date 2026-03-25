document.querySelectorAll('.flip-scene').forEach(scene => {
    scene.addEventListener('click', () => {
        scene.querySelector('.flip-card').classList.toggle('is-flipped');
    });
});

function openFn() {
    const over =
        document.getElementById(
            "overlay"
        );
    const popDialog =
        document.getElementById(
            "popupDialog"
        );
    over.classList.toggle("hidden");
    popDialog.classList.toggle(
        "hidden"
    );
    popDialog.style.opacity =
        popDialog.style.opacity ===
            "1"
                ? "0"
                : "1";
}

document.getElementById("btnEnviar").addEventListener("click", openFn);
document.getElementById("btnCerrar").addEventListener("click", openFn);
