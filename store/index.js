import React from 'react';
import { createStore } from 'redux';

const INITIAL_STATE  = {
    initialCurrencies:[
        "USD",
        "BRL"
    ],
    applyCurrency: {
        name: '',
        value: ''
    }
};

function reducer(state = INITIAL_STATE, action){

    if(action.type === 'ALL_CURRENCIES'){
        return{ ...state, currencies: action.currencies,base: action.base,applyCurrency: action.applyCurrency}
    }

    return state;
}

const store = createStore(reducer);

export default store;