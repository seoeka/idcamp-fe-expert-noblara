/* eslint-disable no-underscore-dangle */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const btHam = document.querySelector('#hamburger');
    const navList = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item');
    const mainElement = document.querySelector('main');
    const footer = document.querySelector('footer');

    const closeNavList = () => {
      navList.classList.remove('show');
      mainElement.classList.remove('blurred');
      footer.classList.remove('blurred');
      btHam.innerHTML = '☰';
      btHam.ariaLabel = 'Buka menu navigasi';
    };

    navList.addEventListener('click', closeNavList);
    mainElement.addEventListener('click', closeNavList);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && navList.classList.contains('show')) {
        const lastNavItem = navItems[navItems.length - 1];
        if (lastNavItem === event.target) {
          closeNavList();
        }
      }
    });

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
