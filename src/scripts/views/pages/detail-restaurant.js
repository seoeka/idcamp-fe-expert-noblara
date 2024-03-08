import RestaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
        <section id="content"></section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#content');

    try {
      const restaurant = await RestaurantData.DetailRestaurant(url.id);
      restaurantContainer.innerHTML = createDetailRestaurant(restaurant.restaurant);
    } catch (error) {
      restaurantContainer.innerHTML = '<p id="page-none">Maaf halaman tidak bisa diakses <br/> Coba periksa koneksi Anda </p>';
    }
  },
};

export default DetailRestaurant;
