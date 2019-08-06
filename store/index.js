import React from 'react';
import { createStore } from 'redux';

function reducer(){
    return {
        initialCurrencies:[
            "USD",
            "BRL"
        ]
    };
}

const store = createStore(reducer);

export default store;