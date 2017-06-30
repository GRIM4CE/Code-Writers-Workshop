'use strict';
import NewsletterBanner from './components/newsletter';
import Registration from './components/registration';
import Speaker from './components/speaker';
import ReadMore from './components/readmore';
import SVG from './components/svg-import';

function appInit() {
  // Init Newsletter Banner
  if (document.getElementById('newsletter-banner')) {
    const newsletterBanner = new NewsletterBanner();
  }

  // Create Registration Form
  if (document.querySelector(".form-container")) {
    const registration = new Registration();
  }

  // Create Speakers
  if (document.querySelectorAll('.speaker-container')) {
    const speakerContainers = document.querySelectorAll('.speaker-container');
    for (let i = 0; i < speakerContainers.length; i++) {
      if (speakerContainers[i].querySelector('.speaker-description') !== null) {
        new Speaker(speakerContainers[i]);
      }
    }
  }

  // Create ReadMore
  if (document.querySelectorAll(".read-more-button")) {
    const readMoreButtons = document.querySelectorAll(".read-more-button");
    for (let i = 0; i < readMoreButtons.length; i++) {
      new ReadMore(readMoreButtons[i]);
    }
  }

  // Init SVG
  if (document.querySelector(".featured-city-icon")) {
    new SVG();
  }
}

appInit();
