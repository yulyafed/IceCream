(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalp-open]'),
    closeModalBtn: document.querySelector('[data-modalp-close]'),
    modal: document.querySelector('[data-modalp]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-prezent');
  }
})();
