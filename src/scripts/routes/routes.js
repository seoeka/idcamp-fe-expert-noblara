import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import DetailRestaurant from '../views/pages/detail-restaurant';

const routes = {
  '/': Home,
  '/restaurant/:id': DetailRestaurant,
  '/favorite': Favorite,
};

export default routes;
