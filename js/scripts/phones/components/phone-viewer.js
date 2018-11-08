'use strict';

import Component from "../../components.js";

export default class PhoneViewer extends Component {
    constructor({element}) {
        super({ element });
        
        this._phone = null;

        this._element.addEventListener('click', this._onBackButtonClick.bind(this));    
    }

    show(phone) {
        this._phone = phone;
        this._render();

        super.show();
    }

    _onBackButtonClick() {
        let BackButton = event.target.closest('[data-element="back-button"]');

        if (!BackButton) {
            return;
        }

        this._trigger( 'back' );           
    }

    _render() {
        let phone = this._phone;

        this._element.innerHTML = `
            <div> 
                <img src="${ phone.images[0] }" alt="" class="phone">

                <button data-element='back-button'>back to lost</button>
                <button>Add to basket</button>

                <h1>${ phone.name }</h1>

                <p>${ phone.description }</p>
                

                <ul class="phone-thumbs">
                    ${ 
                        phone.images.map((imageUrl) => `
                            <li>
                                <img src="${ imageUrl }" alt="picture">
                            </li>                 
                        `).join('')
                    }
                </ul>
            </div>
            
        `;
    }
}
