/* eslint-disable no-undef */
Feature('Post Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post a review', async ({ I }) => {
  I.waitForElement('.rest-item .rest-cont .title a', 3);
  I.click(locate('.rest-item .rest-cont .title a').first());

  const name = 'E2E Testing';
  const review = 'This is review from E2E Testing';

  I.fillField('input[name="name"]', name);
  I.fillField('textarea[name="review"]', review);

  I.click('#submit-review');

  I.see(name, '.detail-review-item .review-item-head h4');
  I.see(review, '.detail-review-item .review-item-body');
});
