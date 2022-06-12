(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalhm-open]'),
    closeModalBtn: document.querySelector('[data-modalhm-close]'),
    modal: document.querySelector('[data-modalh]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-header');
  }
})();
