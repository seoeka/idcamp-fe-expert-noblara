import logo from '../../public/images/logo.png';

class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div class="foot-co col">
                <img src="${logo}" alt=""/>
                <p>Copyright &copy; 2024 - Noblara by <a href="https://github.com/seoeka" target="_blank" rel="noopener noreferrer">@seoeka</a></p>
            </div>
        </footer>
        `;
  }
}

customElements.define('footer-content', FooterContent);
