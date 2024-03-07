import logo from '../../public/images/logo.png';

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.scrolled();
  }

  render() {
    this.innerHTML = `
        <nav>
            <a href="#main-content" aria-label="Skip ke konten utama" class="skip-link">Skip ke Konten Utama</a>     
            <div class="nav-content">
                <div class="nav-logo">
                    <img src="${logo}" alt="Logo Noblara" id="logo">
                </div>
                <div class="nav-menu">
                    <button id="hamburger" aria-label="Buka Menu" title="Menu Navigasi" alt="Menu Navigasi">☰</button>
                    <div class="nav-list" id="side-menu">
                        <a href="#/" class="nav-item">Home</a>
                        <a href="#" class="nav-item">Favorite</a>
                        <a href="https://github.com/seoeka" class="nav-item" target="_blank" rel="noopener noreferrer">About Us</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
  }

  scrolled() {
    const navbar = this.querySelector('nav');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 80;
      navbar.classList.toggle('scrolled', scrolled);

      navbar.style.backgroundColor = scrolled
        ? 'rgba(34, 34, 34, 1)'
        : 'rgba(34, 34, 34, 0)';
    });
  }
}

customElements.define('nav-bar', NavigationBar);
