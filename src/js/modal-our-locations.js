(() => {
    const refs = {
    openModLocBtn: document.querySelector("[data-modloc-open]"),
    closeModLocBtn: document.querySelector("[data-modloc-close]"),
    modloc: document.querySelector("[data-modloc]"),
    body: document.querySelector("body"),
    };

refs.openModLocBtn.addEventListener("click", toggleModLoc);
refs.closeModLocBtn.addEventListener("click", toggleModLoc);

function toggleModLoc() {
    refs.modloc.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
}
})();