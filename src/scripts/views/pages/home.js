import RestaurantDataSource from '../../data/restaurant-data';
import createRestaurantItem from '../templates/template-creator';
import hero from '../../../public/images/heros/hero-image_2.jpg';

const Home = {
  async render() {
    return `
    <section class="hero-element">
        <div class="darker-img"></div>
        <img src="${hero}" id=hero alt="" />
        <div class="hero-caption">
            <p class="caption">Eksklusif, fusion makanan Nusantara<br>dengan nuansa modern dan cita rasa istimewa</p>
        </div>
    </section>
    <section class="rest-head">
        <h2>Rumah Makan Kami</h2>
        <p>Nikmati sajian eksklusif Nusantara modern di seluruh Indonesia</p>
    </section>
    <section class="rest-list" id="main-content">
    </section>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.rest-list');
    const loadingElement = document.querySelector('.loader-wrapper');

    const restaurants = await RestaurantDataSource.ListRestaurant();
    loadingElement.classList.add('display-none');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Home;
