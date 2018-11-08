'use strict';

const phonesService = {
    getPhones() {
    
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/phones', false);
        
        xhr.send(); 

        console.log(xhr.status, xhr.statusText);

        return JSON.parse(xhr.responseText);

    }  
};

export default phonesService;