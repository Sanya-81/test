'use strict';

import Component from "../../components.js";

export default class PhoneViewer extends Component {
    constructor({element}) {
        super({ element });

        this._render();
        
        this._element.addEventListener('click', this._onBackButtonClick.bind(this));    
    }

    _onBackButtonClick() {
        let BackButton = event.target.closest('[data-element="back-button"]');

        if (!BackButton) {
            return;
        }

        this._trigger( 'back' );           
    }

    _render() {
        this._element.innerHTML = `
            <div>
                <img src="images/phones/motorola-xoom-with-wi-fi.0.jpg" alt="" class="phone">

                <button data-element='back-button'>back to lost</button>
                <button>Add to basket</button>

                <h1>Motorola XOOM with Wi-Fi</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde error illo, veritatis laboriosam   pariatur, consectetur quisquam, iusto placeat deserunt iure necessitatibus itaque obcaecati optio aperiam vitae non odit corrupti!
                </p>

                <ul class="phone-thumbs">
                    <li><img src="images/phones/motorola-xoom-with-wi-fi.0.jpg" alt="picture"></li>
                    <li><img src="images/phones/motorola-xoom-with-wi-fi.1.jpg" alt="picture"></li>
                    <li><img src="images/phones/motorola-xoom-with-wi-fi.2.jpg" alt="picture"></li>
                    <li><img src="images/phones/motorola-xoom-with-wi-fi.3.jpg" alt="picture"></li>
                    <li><img src="images/phones/motorola-xoom-with-wi-fi.4.jpg" alt="picture"></li>
                    <li><img src="images/phones/motorola-xoom-with-wi-fi.5.jpg" alt="picture"></li>
                </ul>
            </div>
            
        `;
    }
}
