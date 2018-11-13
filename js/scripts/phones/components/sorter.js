import Component from "../../components.js";

'use strict';

export default class Sorter extends Component{
    constructor({element}) {
        super({element});

        this._render();

        this.on('change', (event) => {
            this._trigger('changeOrder', event.target.value);
        });
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

