'use strict';
import phonesService from './components/services/phones-service.js';
import PhonesCatalog from './components/phones-catalog.js';
import ShoppingCart from './components/shopping-cart.js';
import PhoneViewer from './components/phone-viewer.js';
import Search from './components/search.js';
import Sorter from './components/sorter.js';

export default class PhonesPage { 
  
  constructor({element}){
    this._element = element;

    this._filter = {
      query: '',
      order: 'name',
    };

    this._initCatalog();
    this._initViewer();
    this._shoppingCart();
    this._initFilter();

    this._refreshPhones();
  }

  _refreshPhones() {
    const callback = (phones) => {
      this._catalog.setPhones(phones);    
    }; 

    phonesService.loadPhones(this._filter, callback);
  }

  _initCatalog() {
    this._catalog = new PhonesCatalog({
      element: this._element.querySelector('[data-component="phones-catalog"]') 
    });

    phonesService.loadPhones((phones) => {   
      this._catalog.setPhones(phones);
    });

    this._catalog.on('phoneSelected', (event) => {
      let phoneId = event.detail;
    
      phonesService.loadPhone(phoneId, (phone) => {
        this._viewer.show(phone);
        this._catalog.hide();
      });  
    });

    this._catalog.on('add', (event) => {
        let phoneId = event.detail;

        this._shoppingCart.addItem(phoneId);
    });
  }

  _initViewer() {
    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="phone-viewer"]'),
    });

      this._viewer.on( 'back', () => {
        this._viewer.hide();
        this._catalog.show();
    });
  }

  _shoppingCart() {
    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
    });
  }

  _initFilter() {
          this._sorter = new Sorter({
      element: this._element.querySelector('[data-component="sorter"]'),
    });

    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
    });
 
    this._search.on('search', (event) => {
      this._filter.query = event.detail;
      this._refreshPhones();
    }); 
  
    this._sorter.on('changeOrder', (event) => {
      this._filter.order = event.detail;
      this._refreshPhones();
    });
  }
} 