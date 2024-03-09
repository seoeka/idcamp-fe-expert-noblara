import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="fav-rest-container">
        <div class="fav-rest-head">
          <h1>Rumah Makan Favorit</h1>
          <p>Daftar Rumah Makan Kesukaan Kamu!</p>
          <div class="divider"></div>
        </div>
        <div class='fav-rest-body flex col'>
            <p id="favorite-none"></p>
            <div class="rest-list grid"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.rest-list');
    const favoriteNone = document.querySelector('#favorite-none');
    if (restaurants.length === 0) {
      favoriteNone.innerHTML = `
          Belum ada rumah makan yang kamu sukai :(
        `;
    }
    restaurants.forEach((restaurant) => {
      favoriteNone.innerHTML = '';
      restaurantContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
