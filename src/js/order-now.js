
(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open-order]'),
    closeModalBtn: document.querySelector('[data-modal-close-order]'),
    modal: document.querySelector('[data-modal-order]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();

