import React from 'react';
import { createStore } from 'redux';

async function api(){
    const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
    const data = await response.json();

    const { base, date, rates } = data;

    const data_formated = {
        base,
        date,
        rates: Object.entries(rates).map(([key, value]) => ({ currency: key, value })),
    };

    return data_formated;
}

function reducer(){
    return {
        initialCurrencies:[
            "USD",
            "BRL"
        ],

        api:[ api() ]
    };
}

const store = createStore(reducer);

export default store;