'use strict';

let BASE_API_URL = 'https://sanya-81.github.io/test/api';

const phonesService = {
    loadPhones(filter, callback) {
        this._sendRequest('/phones', (phones) => {
            const filterdPhones = this._filter(phones, filter.query);
            const sortedPhones = this._sort(filterdPhones, filter.order);
        
            callback(sortedPhones);
        });
    },  

    loadPhone(phoneId, callback) {
        this._sendRequest(`/phones/${phoneId}`, callback);
    }, 

    _filter(phones, query) {
        if (!query) {
            return phones;
        }

        let normaLizedQuery = query.toLowerCase();

        return phohes.filter((phone) =>{
            return phone.name.toLowerCase().include(normaLizedQuery);
        });
    },

    _sort(phones, orderField) {
        return phones.sort((phoneA, phoneB) =>{
            return (phoneA[orderField] > phoneB[orderField])
                ? 1
                : -1;
        });
    },

    _sendRequest( url, callback, { method = 'GET'} = {}) {
        let xhr = new XMLHttpRequest();
        let fullUrl = BASE_API_URL + url + '.json';


        xhr.open(method, fullUrl, true);
        
        xhr.send(); 

        xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);

        callback(data);
        };
    }
};

export default phonesService;