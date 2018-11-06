'use strict';

export default class Sorter {
    constructor({element}) {
        this._element = element;

        this._render();
    }

    _render() {
        this._element.innerHTML = `
            Sort by:
            <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
            </select>
        `;
    }
}

