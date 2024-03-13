/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking_Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.see('Belum ada rumah makan yang kamu sukai :(', 'p');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.rest-item .rest-cont .title a', 3);

  const firstRestaurant = locate('.rest-item .rest-cont .title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.rest-item .rest-cont .title a');
  const likedRestaurantTitle = await I.grabTextFrom('.rest-item .rest-cont .title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.rest-item .rest-cont .title a', 3);

  const firstRestaurant = locate('.rest-item .rest-cont .title a').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.rest-item .rest-cont .title a');

  const likedRestaurant = locate('.rest-item .rest-cont .title a').first();
  I.click(likedRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Belum ada rumah makan yang kamu sukai :(', 'p');
});
