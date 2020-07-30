class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu-btn');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this.getEventType();
    this.addEvent();
  }

  getEventType() {
    this.eventType = window.ontouchstart ? 'touthstart' : 'click';
  }

  toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this.toggle.bind(this));
  }
}

new MobileMenu();