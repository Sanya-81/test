'use strict';

export default class Search {
    constructor({element}) {
        this._element = element;

        this._render();
    }

    _render() {
        this._element.innerHTML = `
         Search:<input type="text">    
        `;
    }
}

