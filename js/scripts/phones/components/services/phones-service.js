'use strict';

const phonesService = {
    loadPhones(filter, callback) {
        this._sendRequest('/api/phones', (phones) => {
            const filterdPhones = this._filter(phones, filter.query);
            const sortedPhones = this._sort(filterdPhones, filter.order);
        
            callback(sortedPhones);
        });
    },  

    loadPhone(phoneId, callback) {
        this._sendRequest(`/api/phones/${phoneId}`, callback);
    }, 

    _filter(phohes, query) {
        if (!query) {
            return phohes;
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

        xhr.open(method, url, true);
        
        xhr.send(); 

        xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);

        callback(data);
        };
    }
};

export default phonesService;