'use strict';

const phonesService = {
    loadPhones(callback) {
        this._sendRequest('/api/phones', callback);
    },  

    loadPhone(phoneId, callback) {
        this._sendRequest(`/api/phones/${phoneId}`, callback);
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