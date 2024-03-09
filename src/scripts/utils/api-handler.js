/* eslint-disable no-alert */
import RestaurantDataSource from '../data/restaurant-data';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.querySelector('#name');
  const review = document.querySelector('#review');
  const detailReviewContainer = document.querySelector(
    '.detail-review-container',
  );

  if (name.value === '' || review.value === '') {
    alert('Nama dan ulasan tidak boleh kosong!');
    return;
  }

  const data = {
    id: url.id,
    name: name.value,
    review: review.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const reviewTemplate = `
        <div class='detail-review-item'>
            <div class="review-item-head flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9D121B" class="icons">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>    
                <div class='flex col'>
                    <h4>${data.name}</h4>
                    <p class="review-item-date">${date}</p>
                </div>                  
            </div>
            <p class="review-item-body">${data.review}</p>
        </div>
        `;

  await RestaurantDataSource.PostReview(data);
  detailReviewContainer.innerHTML += reviewTemplate;
  name.value = '';
  review.value = '';
};

export default PostReview;
