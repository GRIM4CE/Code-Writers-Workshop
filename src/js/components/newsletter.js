'use strict';

class NewsletterBanner {
  constructor() {
    this.banner = document.getElementById('newsletter-banner');
    this.bannerCloseButton = document.getElementById('newsletter-banner-close-button');
    this.bindButtons();
  }

  closeBanner() {
    this.banner.setAttribute('data-state', 'closed');
    document.querySelector('body').setAttribute('data-state', 'newsletter-banner-closed');
  }

  bindButtons() {
    this.bannerCloseButton.addEventListener('click', this.closeBanner.bind(this));
  }
}

export default NewsletterBanner;
