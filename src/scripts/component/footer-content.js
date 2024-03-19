import logo from '../../public/images/logo.png';

class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="foot-co col">
                <img src="${logo}" alt="Logo Noblara"/>
                <p>Copyright &copy; 2024 - Noblara by <a href="https://github.com/seoeka" target="_blank" rel="noopener noreferrer">@seoeka</a></p>
            </div>
        `;
  }
}

customElements.define('footer-content', FooterContent);
