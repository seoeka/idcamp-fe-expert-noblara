import 'regenerator-runtime'; /* for async await transpile */

// Styles
import '../styles/main.scss';
import '../styles/responsive.scss';

import main from './view/main';

// Components
import './component/navigation-bar';
import './component/hero-element';
import './component/restaurant-section';
import './component/footer-content';

document.addEventListener("DOMContentLoaded", main);