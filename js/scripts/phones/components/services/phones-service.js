'use strict';

const phonesService = {
    loadPhones(callback) {
    
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/phones', true);
        
        xhr.send(); 

        xhr.onload = () => {
        console.log(xhr.status, xhr.statusText);

        let data = JSON.parse(xhr.responseText);

        callback(data);
        };
    }  
};

export default phonesService;