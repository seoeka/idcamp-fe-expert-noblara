import config from '../../utils/config';

const createRestaurantItem = (restaurant) => `
    <card-item
    id="${restaurant.id}"
    href="${`/#/details/${restaurant.id}`}"
    image="${config.BASE_IMAGE_URL + restaurant.pictureId}"
    name="${restaurant.name}"
    city="${restaurant.city}"
    rating="${restaurant.rating}"
    description="${restaurant.description}"
    ></card-item>
`;

export default createRestaurantItem;
