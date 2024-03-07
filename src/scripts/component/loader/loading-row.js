class LoadingRow extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="loading-row-wrapper display-none">
              <div class="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
        `;
  }
}

customElements.define('loading-row', LoadingRow);
