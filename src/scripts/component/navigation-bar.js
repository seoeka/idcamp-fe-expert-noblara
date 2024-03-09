import logo from '../../public/images/logo.png';

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.scrolled();
  }

  render() {
    this.innerHTML = `
        <nav class='flex'>
            <div class="nav-content flex">
                <div class="nav-logo">
                    <img src="${logo}" alt="Logo Noblara" id="logo">
                </div>
                <div class="nav-menu">
                    <button id="hamburger" aria-label="Buka Menu" title="Menu Navigasi" alt="Menu Navigasi">☰</button>
                    <div class="nav-list display-none col" id="side-menu">
                        <a href="#/" class="nav-item">Home</a>
                        <a href="#/favorite" class="nav-item">Favorite</a>
                        <a href="https://github.com/seoeka" class="nav-item" target="_blank" rel="noopener noreferrer">About Us</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
  }

  scrolled() {
    const navbar = this.querySelector('nav');
    const isRestaurantPage = () => window.location.hash.startsWith('#/restaurant/');
    const isFavoritePage = () => window.location.hash.startsWith('#/favorite');

    const setNavbarBackground = () => {
      if (!isRestaurantPage() && !isFavoritePage()) {
        const scrolled = window.scrollY > 80;
        navbar.classList.toggle('scrolled', scrolled);
        navbar.style.backgroundColor = scrolled
          ? 'rgba(34, 34, 34, 1)'
          : 'rgba(34, 34, 34, 0)';
      } else if (isRestaurantPage() || isFavoritePage()) {
        navbar.style.backgroundColor = 'rgba(34, 34, 34, 1)';
      }
    };

    window.addEventListener('scroll', setNavbarBackground);
    window.addEventListener('load', setNavbarBackground);
    window.addEventListener('hashchange', setNavbarBackground);
  }
}

customElements.define('nav-bar', NavigationBar);
