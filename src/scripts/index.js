import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';

import main from './view/main';
import './component/rest-list';
import './component/navigation-bar';

document.addEventListener("DOMContentLoaded", main);