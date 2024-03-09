import config from '../../globals/config';

const createRestaurantItem = (restaurant) => `
    <card-item
    id="${restaurant.id}"
    href="${`#/restaurant/${restaurant.id}`}"
    image="${config.BASE_IMAGE_URL + restaurant.pictureId}"
    name="${restaurant.name}"
    city="${restaurant.city}"
    rate="${restaurant.rating}"
    desc="${restaurant.description}"
    ></card-item>
`;

const createDetailRestaurant = (restaurant) => `
    <div class='detail-container flex col'>
        <div class='detail-head flex col'>
            <p><a href='#/'>Home</a> &nbsp;&nbsp;> &nbsp;&nbsp;Rumah Makan &nbsp;&nbsp;> &nbsp;&nbsp;<a href='#/restaurant/${restaurant.id}'>${restaurant.name}</a></p>
            <img src='${config.BASE_IMAGE_URL + restaurant.pictureId}' alt='Gambar ${restaurant.name}'/>
            <h1 class='detail-title'>${restaurant.name} <span title='Rating Rumah Makan'>( &#10029; ${restaurant.rating} / 5.0 )</span></h1>
            <p class='detail-address flex' title='Alamat Rumah Makan'><span>&#9906;&nbsp;&nbsp;</span> ${restaurant.address}, ${restaurant.city}</p>
            <p class='detail-category flex' title='Kategori Rumah Makan'><span>&#10070;&nbsp;&nbsp;</span> ${restaurant.categories
    .map((category) => category.name)
    .join(', ')}</p>
        </div>
        <div class='detail-body flex col'>
            <p><strong>Deskripsi : </strong></p>
            <p class='detail-desc'>${restaurant.description}</p>
            <div class='divider flex'></div>
            <h2>Daftar Menu</h2>
            <div class='detail-menu flex col'>
                <div class='detail-menu-container'>
                    <h3><span>🥗&nbsp;</span>Makanan</h3>
                    <div class='detail-menu-item'>
                        ${restaurant.menus.foods
    .map(
      (food) => `
                              <p class="detail-menu-name"><span>•&nbsp; </span>${food.name}</p>`,
    )
    .join('')}
                    </div>
                </div>
                <div class='detail-menu-container'>
                    <h3><span>🥂&nbsp;</span>Minuman</h3>
                    <div class='detail-menu-item'>
                        ${restaurant.menus.drinks
    .map(
      (drink) => `
                              <p class="detail-menu-name"><span>•&nbsp; </span>${drink.name}</p>`,
    )
    .join('')}
                    </div>
                </div>
            </div>
            <div class='divider flex'></div>
        </div>
        <div class='detail-review flex col'>
            <h2>Ulasan Pelanggan</h2>
            <div class='detail-review-container grid'>
                ${restaurant.customerReviews
    .map(
      (review) => `
                <div class='detail-review-item'>
                    <div class="review-item-head flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9D121B" class="icons">
                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                        </svg>    
                        <div class='flex col'>
                            <h4>${review.name}</h4>
                            <p class="review-item-date">${review.date}</p>
                        </div>                  
                    </div>
                    <p class="review-item-body">${review.review}</p>
                </div>
                `,
    )
    .join('')}
            </div>
            <form class="form-review flex col">
                <h2>Tambah Ulasan</h2>
                <div class='flex col'>
                    <label>Nama</label>
                    <input type="text" name="name" id="name" placeholder="Nama" />
                </div>
                <div class='flex col'>
                    <label>Ulasan</label>
                    <textarea name="review" id="review" rows="4" placeholder="Ulasan"></textarea>
                </div>
                <button type="submit" id="submit-review">Kirim</button>
              </form>
        </div>
    </div>

`;

const createLikeButton = () => `
  <button aria-label="like" id="likeButton" class="like flex">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButton = () => `
  <button aria-label="unlike" id="likeButton" class="like flex">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItem, createDetailRestaurant, createLikeButton, createLikedButton,
};
