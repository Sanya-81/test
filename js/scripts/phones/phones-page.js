'use strict';
import PhonesCatalog from './components/phones-catalog.js';
import PhonesService from './components/services/phones-service.js';
import ShoppingCart from './components/shopping-cart.js';
import PhoneViewer from './components/phone-viewer.js';
import Search from './components/search.js';
import Sorter from './components/sorter.js';

export default class PhonesPage { 
  
  constructor({element}){
    this._element = element;
    
    this._catalog = new PhonesCatalog({
      element: this._element.querySelector('[data-component="phones-catalog"]'),
      phones: PhonesService.getPhones(),
    });

      this._catalog.on('phoneSelected', (event) => {
        let phoneId = event.detail;
      
        this._viewer.show();
        this._catalog.hide();
    });

    this._catalog.on('add', (event) => {
        let phoneId = event.detail;

        this._shoppingCart.addItem(phoneId);
    });
    
    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="phone-viewer"]'),
    });

      this._viewer.on( 'back', () => {
        this._viewer.hide();
        this._catalog.show();
    });

    this._sorter = new Sorter({
      element: this._element.querySelector('[data-component="sorter"]'),
    });

    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
    });


    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
    });
  } 
} 