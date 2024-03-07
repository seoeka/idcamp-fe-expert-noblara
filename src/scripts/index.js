import 'regenerator-runtime'; /* for async await transpile */

// Styles
import '../styles/main.scss';
import '../styles/responsive.scss';

import App from './views/app';

// Components
import './component/navigation-bar';
import './component/hero-element';
import './component/restaurant-section';
import './component/footer-content';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
