'use strict';

const phonesService = {
    getPhones() {
    
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/phones.json', false);
        
        xhr.send(); 

        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);

        return JSON.parse(xhr.responseText);

    }
};

export default phonesService;