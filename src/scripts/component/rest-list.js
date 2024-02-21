import data from '../../public/data/DATA.json';
import './card/card-item';

class restList extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {

    }
}

customElements.define('rest-list', restList); 