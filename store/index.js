import React from 'react';
import { createStore } from 'redux';

const INITIAL_STATE  = {
    baseCurrency: 'USD',
    applyCurrency:{
            'name': '',
            'value': ''
        }
};

function reducer(state = INITIAL_STATE, action){
    if(action.type === 'ALL_CURRENCIES'){
        return{ ...state, currencies: action.currencies,applyCurrency: action.applyCurrency, baseCurrency: action.baseCurrency}
    }else if(action.type === 'UPDATE_APPLY_CURRENCY'){
        return { ...state, applyCurrency: action.applyCurrency}
    }

    return state;
}

const store = createStore(reducer);

export default store;