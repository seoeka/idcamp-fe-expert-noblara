import config from '../../utils/config';

const createRestaurantItem = (restaurant) => `
    <card-item
    id="${restaurant.id}"
    href="${`/#/restaurant/${restaurant.id}`}"
    image="${config.BASE_IMAGE_URL + restaurant.pictureId}"
    name="${restaurant.name}"
    city="${restaurant.city}"
    rate="${restaurant.rating}"
    desc="${restaurant.description}"
    ></card-item>
`;

export default createRestaurantItem;
