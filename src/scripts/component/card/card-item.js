class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="rest-item">
            <div class="rest-img">
              <img src="${this.getAttribute('image')}" alt="Gambar ${this.getAttribute('name')}"/>
              <p>Kota ${this.getAttribute('city')}</p>
            </div>
            <div class="rest-cont">
              <div class="title">
                <h3 title="${this.getAttribute('name')}"><a href="#">${this.getAttribute('name')}</a></h3>
                <div class="rating" title="Rating ${this.getAttribute('name')}">
                  <p>&#9733; ${this.getAttribute('rate')}</p>
                </div>
              </div>
              <p class="desc">${this.getAttribute('desc')}</p>
            </div>
        </div>
        `;
  }
}

customElements.define('card-item', CardItem);
