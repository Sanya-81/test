'use strict';

export default class ShoppingCart {
    constructor({element}) {
        this._element = element;

        this._items = [];
        
        this._render();
        
    }
    
    addItem(item) {
        this._items = [
            ...this._items,
            item
        ];
        
        this._render();
        
    }

    _render() {

        this._element.innerHTML = `
            <p>Shopping cart</p> 
            <ul>
                ${this._items.length > 0
                    ? this._getItemsHtml()
                    : '<p>No items yet</p>'
                }
            </ul>
        `;
    }

    _getItemsHtml() {
        let html = '';

        for (let item of this._items) {
            html += `
                <li>${ item }</li>
            `;
        }
        return html;
    }

}