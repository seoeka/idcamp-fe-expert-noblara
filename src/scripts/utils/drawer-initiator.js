/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button, content);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button, content);
    });
  },

  _toggleDrawer(event, drawer, button, content) {
    event.stopPropagation();
    drawer.classList.toggle('show');
    button.innerHTML = drawer.classList.contains('show') ? 'X' : '☰';
    button.ariaLabel = drawer.classList.contains('show') ? 'Tutup menu navigasi' : 'Buka menu navigasi';
    content.classList.toggle('blurred');
  },

  _closeDrawer(event, drawer, button, content) {
    event.stopPropagation();
    drawer.classList.remove('show');
    content.classList.remove('blurred');
    button.innerHTML = '☰';
    button.ariaLabel = 'Buka menu navigasi';
  },
};

export default DrawerInitiator;
