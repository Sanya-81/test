'use strict';
import Component from '../../components.js';

export default class Search extends Component {
    constructor({element}) {
        super({ element });

        this._render();
        
        this.on('input', (event) => {
            this._trigger('search',  event.target.value);
        });    
    } 

    _render() {
        this._element.innerHTML = `
         Search:<input type="text">    
        `;
    }
}

