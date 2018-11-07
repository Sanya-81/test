'use strict';

export default class Component {
  constructor({ element }) {
    this._element = element;
  }

  on(eventName, callback) {
    this._element.addEventListener(eventName, callback);  
  } 

   hide() {
    this._element.classList.add('js-hidden');
  }
  
  show() {
    this._element.classList.remove('js-hidden');
  }

  _trigger(eventName, detail){
    this._element.dispatchEvent(new CustomEvent( eventName, { detail } ));
  }
}
