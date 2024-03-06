import hero from '../../public/images/heros/hero-image_2.jpg';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
    this.handleCaption();
  }

  handleCaption() {
    const caption = this.querySelector('.caption');
    const windowWidth = window.innerWidth;
    if (windowWidth < 576 && caption) {
      caption.innerHTML = caption.innerHTML.replace('<br>', ' ');
    }
  }

  render() {
    this.innerHTML = `
            <section class="hero-element">
                <div class="darker-img"></div>
                <img src="${hero}" id=hero alt="" />
                <div class="hero-caption">
                    <p class="caption">Eksklusif, fusion makanan Nusantara<br>dengan nuansa modern dan cita rasa istimewa</p>
                </div>
            </section>
            `;
  }
}

customElements.define('hero-element', HeroElement);
