import RestaurantData from '../../data/restaurant-data';
import { createRestaurantItem } from '../templates/template-creator';
import HeroSmall from '../../../public/images/heros/hero-image_2-small.jpg';
import HeroMedium from '../../../public/images/heros/hero-image_2-medium.jpg';

const Home = {
  async render() {
    return `
    <section class="hero-element flex">
        <picture>
          <source media="(max-width: 540px)" srcset="${HeroSmall}">
          <source media="(max-width: 1080px)" srcset="${HeroMedium}">
          <img src="${HeroMedium}" id="hero" alt="Masakan tradisional yang ada di piring">
        </picture>
        <div class="hero-caption flex col">
            <p class="caption">Eksklusif, fusion makanan Nusantara<br>dengan nuansa modern dan cita rasa istimewa</p>
        </div>
    </section>
    <section class="rest-element flex col">
      <div class="rest-head flex col">
          <h2>Rumah Makan Kami</h2>
          <p>Nikmati sajian eksklusif Nusantara modern di seluruh Indonesia</p>
      </div>
      <loading-circle></loading-circle>
      <div class="rest-list grid"></div>
    </section>
      `;
  },

  async afterRender() {
    this.handleCaption();

    const restaurantContainer = document.querySelector('.rest-list');
    const loadElement = document.querySelector('.loader-wrapper');

    const restaurants = await RestaurantData.ListRestaurant();
    loadElement.classList.add('display-none');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },

  handleCaption() {
    const caption = document.querySelector('.hero-caption .caption');
    const windowWidth = window.innerWidth;
    if (windowWidth < 576 && caption) {
      caption.innerHTML = caption.innerHTML.replace('<br>', ' ');
    }
  },
};

export default Home;
