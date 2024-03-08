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
    <div class='detail-container'>
        <div class='detail-head'>
            <p><a href='#/'>Home</a> &nbsp;&nbsp;> &nbsp;&nbsp;Rumah Makan &nbsp;&nbsp;> &nbsp;&nbsp;<a href='#/restaurant/${restaurant.id}'>${restaurant.name}</a></p>
            <img src='${config.BASE_IMAGE_URL + restaurant.pictureId}' alt='Gambar ${restaurant.name}'/>
            <h1 class='detail-title'>${restaurant.name} <span title='Rating Rumah Makan'>( &#10029; ${restaurant.rating} / 5.0 )</span></h1>
            <p class='detail-address' title='Alamat Rumah Makan'><span>&#9906;&nbsp;&nbsp;</span> ${restaurant.address}, ${restaurant.city}</p>
            <p class='detail-category' title='Kategori Rumah Makan'><span>&#10070;&nbsp;&nbsp;</span> ${restaurant.categories
                .map((category) => category.name)
                .join(', ')}</p>
        </div>
        <div class='detail-body'>
            <p><strong>Deskripsi : </strong></p>
            <p class='detail-desc'>${restaurant.description}</p>
            <div class='divider'></div>
            <h2>Daftar Menu</h2>
            <div class='detail-menu'>
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
            <div class='divider'></div>
        </div>
        <div class='detail-ulasan'>
            <h2>Ulasan Pelanggan</h2>
            
        </div>
    </div>

`;

export { createRestaurantItem, createDetailRestaurant };
