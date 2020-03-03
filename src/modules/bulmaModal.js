/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/prefer-default-export */
// modal
export class BulmaModal {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.closeData();
  }

  show() {
    this.elem.classList.toggle('is-active');
    this.onShow();
  }

  close() {
    this.elem.classList.toggle('is-active');
    this.onClose();
  }

  closeData() {
    const modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background");
    const that = this;
    modalClose.forEach(function(e) {
      e.addEventListener('click', function() {
        that.elem.classList.toggle('is-active');
        const event = new Event('modal:close');
        that.elem.dispatchEvent(event);
      });
    });
  }

  onShow() {
    const event = new Event('modal:show');
    this.elem.dispatchEvent(event);
  }

  onClose() {
    const event = new Event('modal:close');
    this.elem.dispatchEvent(event);
  }

  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback);
  }
}
