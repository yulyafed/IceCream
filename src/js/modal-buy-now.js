(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalh-open]'),
    closeModalBtn: document.querySelector('[data-modalh-close]'),
    modal: document.querySelector('[data-modalh]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-header');
  }
})();
