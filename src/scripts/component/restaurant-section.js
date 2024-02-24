import data from '../../public/data/DATA.json';
import './card/card-item';

class RestaurantSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const restaurants = data.restaurants;
    let CardData = "";
    restaurants.forEach((restaurant) => {
      CardData += `
      <card-item
        image="${restaurant.pictureId}"
        name="${restaurant.name}"
        city="${restaurant.city}"
        rate="${restaurant.rating}"
        desc="${restaurant.description}"
      ></card-item>
    `;
    });
    this.innerHTML = `
        <section class="rest-head">
            <h2>Rumah Makan Kami</h2>
            <p>Nikmati sajian eksklusif Nusantara modern di seluruh Indonesia</p>
        </section>
        <section class="rest-list" id="main-content">
            ${CardData}
        </section>
        `;
  }
}

customElements.define("restaurant-section", RestaurantSection);