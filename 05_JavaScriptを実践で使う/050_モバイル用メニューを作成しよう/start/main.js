class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu-btn');
    this.DOM.container = document.querySelector('#global-container');
    this.addEvent();
  }

  toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }
}

  addEvent() {
    this.DOM.btn.addEventListener('click', this.toggle.bind(this));
  }

new MobileMenu();