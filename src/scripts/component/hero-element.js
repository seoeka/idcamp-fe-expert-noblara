import hero from "../../public/images/heros/hero-image_2.jpg";

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
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

customElements.define("hero-element", HeroElement);