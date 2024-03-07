import 'regenerator-runtime'; /* for async await transpile */

// Styles
import '../styles/main.scss';
import '../styles/responsive.scss';

// Components
import './component/index';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
