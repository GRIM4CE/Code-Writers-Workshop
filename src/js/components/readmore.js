class ReadMore {
  constructor(readMoreButton) {
    this.readMoreButton = readMoreButton;
    this.panel = this.readMoreButton.parentNode;
    this.readMoreText = this.panel.querySelector('.read-more-text');
    this.bindReadMoreButton();
  }

  toggleReadMore() {
    this.toggleState(this.readMoreText, 'open', 'closed');
    this.toggleText(this.readMoreButton.innerText, 'Read More', 'Read Less');
  }

  bindReadMoreButton() {
    this.readMoreButton.addEventListener('click', this.toggleReadMore.bind(this));
  }

  toggleState(elem, one, two) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  }

  toggleText(elem, one, two) {
    if(elem === one) {
      this.readMoreButton.innerText = two
    } else {
      this.readMoreButton.innerText = one;
    }
  }
}

export default ReadMore;
