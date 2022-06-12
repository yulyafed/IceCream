(() => {
    const refs = {
    openModFrBtn: document.querySelector("[data-modfr-open]"),
    closeModFrBtn: document.querySelector("[data-modfr-close]"),
    modfr: document.querySelector("[data-modfr]"),
    body: document.querySelector("body"),
    };

refs.openModFrBtn.addEventListener("click", toggleModFr);
refs.closeModFrBtn.addEventListener("click", toggleModFr);

function toggleModFr() {
    refs.modfr.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
}
})();