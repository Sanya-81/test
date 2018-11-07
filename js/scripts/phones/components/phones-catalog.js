'use strict';

import Component from "../../components.js";

export default class PhonesCatalog extends Component {
    
    constructor({element, phones}) {
        super({ element });
        
        this._phones = phones;

        this._render();

        this._element.addEventListener('click', this._onDetailsTriggerClick.bind(this));
        this._element.addEventListener('click', this._onAddButtonClick.bind(this));
        
    }
    
    _onDetailsTriggerClick(event) {
        let trigger = event.target.closest('[data-element="details-trigger"]');
        
        if (!trigger) {
            return;
        }

        let phoneElement = event.target.closest('[data-element="phone"]');
        
        this._trigger('phoneSelected', phoneElement.dataset.phoneId );
    }
    
    _onAddButtonClick(event) {
        let addButton = event.target.closest('[data-element="add-button"]');
        
        if (!addButton) {
            return;
        }

        let phoneElement = event.target.closest('[data-element="phone"]');
        
        this._trigger('add', phoneElement.dataset.phoneId );
    }

    _render() {
    this._element.innerHTML = ` 
                
        <ul class = 'phones'>
        ${ this._phones
            .map((phone) => `
                <li class="thumbnail" 
                    data-element="phone"
                    data-phone-id="${phone.id}">

                    <a href="#!/phones/${ phone.id }" 
                       data-element="details-trigger"
                       class="thumb">
                       
                        <img alt="${phone.name}" 
                             src="${phone.imageUrl}">
                    </a>
                
                    <div class='phone-datails'>
                    
                        <a href="#!/phones/${ phone.id}"
                        data-element="details-trigger">
                            
                        ${phone.name}
                        </a>
                    
                        <p>${phone.snippet}</p>
                        <div> 
                            <a  class="buttonAdd"
                                data-element="add-button">
                                    add
                            </a>
                        </div>
                    </div>
                </li>
            `)
            
            .join('')
        }
        </ul>
    `;
    }   

}  