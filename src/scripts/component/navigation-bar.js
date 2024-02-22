import logo from '../../public/images/logo.png';

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <div class="nav-content">
                <div class="nav-logo">
                    <img src="${logo}" alt="Logo Noblara" id="logo">
                </div>
                <div class="nav-menu">
                    <button id="hamburger" aria-label="Buka Menu" title="Menu Navigasi">
                        
                    </button>
                    <div class="nav-list">
                        <a href="#/" class="nav-item">Home</a>
                        <a href="#" class="nav-item">Favorite</a>
                        <a href="https://github.com/seoeka" class="nav-item" target="_blank" rel="noopener noreferrer">About Us</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
  }
}

customElements.define("nav-bar", NavigationBar);