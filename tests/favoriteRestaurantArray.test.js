/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, , eqeqeq
    return favoriteResto.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurant() {
    return favoriteResto;
  },

  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteResto.push(restaurant);
  },

  deleteRestaurant(id) {
    // eslint-disable-next-line eqeqeq
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id != id);
  },

  async searchRestaurant(query) {
    return (await this.getAllRestaurant()).filter((restaurant) => {
      const loweredCaseRestoTitle = (restaurant.title || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteResto = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});
