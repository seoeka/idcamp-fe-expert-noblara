import config from './config';

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${config.BASE_URL}list`,
  GET_DETAIL_RESTAURANT: (id) => `${config.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${config.BASE_URL}search?q=${query}`,
  POST_REVIEW: `${config.BASE_URL}review`,
};

export default API_ENDPOINT;
