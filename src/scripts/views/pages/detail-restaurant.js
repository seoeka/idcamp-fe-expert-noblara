import RestaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import PostReview from '../../utils/api-handler';

const DetailRestaurant = {
  async render() {
    return `
        <section id="content"></section>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#content');

    try {
      const restaurant = await RestaurantData.DetailRestaurant(url.id);
      restaurantContainer.innerHTML = createDetailRestaurant(
        restaurant.restaurant,
      );
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          city: restaurant.restaurant.city,
          pictureId: restaurant.restaurant.pictureId,
          description: restaurant.restaurant.description,
          rating: restaurant.restaurant.rating,
        },
      });
    } catch (error) {
      restaurantContainer.innerHTML = '<p id="page-none">Maaf halaman tidak bisa diakses <br/> Coba periksa koneksi Anda </p>';
    }

    const submitReviewButton = document.querySelector('#submit-review');
    submitReviewButton.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });
  },
};

export default DetailRestaurant;
